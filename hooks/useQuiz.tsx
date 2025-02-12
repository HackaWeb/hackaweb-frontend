import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

type QuizStatus = "waiting" | "started" | "ended" | "completed";

interface QuizResult {
    correctAnswers: number;
    totalQuestions: number;
    score: number;
}

export const useQuiz = () => {
    const [connection, setConnection] = useState<signalR.HubConnection | null>(
        null,
    );

    const [quizTime, setQuizTime] = useState<number | null>(null);
    const [quizStatus, setQuizStatus] = useState<QuizStatus>("waiting");
    const [result, setResult] = useState<QuizResult | null>(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(`${process.env.NEXT_PUBLIC_SOCKET_URL}/quizTimerHub`, {
                transport: signalR.HttpTransportType.WebSockets,
                skipNegotiation: true,
            })
            .configureLogging(signalR.LogLevel.Information)
            .withAutomaticReconnect([0, 2000, 5000, 10000]) // Автоматичне перепідключення
            .build();

        newConnection
            .start()
            .then(() => {
                console.log(
                    "[Console] :white_check_mark: Підключено до QuizTimerHub.",
                );
                setConnection(newConnection);
            })
            .catch((err) =>
                console.error("[Console] :x: Помилка підключення:", err),
            );

        return () => {
            newConnection
                .stop()
                .then(() =>
                    console.log(
                        "[Console] :electric_plug: Підключення закрито.",
                    ),
                );
        };
    }, []);

    useEffect(() => {
        if (!connection) return;

        // Обробник початку квізу
        connection.on("QuizStarted", (quizId, userId, startTime, duration) => {
            console.log(
                `[Hub] :rocket: QuizStarted: quizId=${quizId}, userId=${userId}, duration=${duration} хв.`,
            );
            setQuizStatus("started");
            setQuizTime(duration);
        });

        // Обробник оновлення часу
        connection.on("UpdateQuizTime", (quizId, remainingTime) => {
            console.log(`[Hub] ⏱ Залишилось часу: ${remainingTime} хв.`);
            setQuizTime(remainingTime);
        });

        // Обробник завершення квізу
        connection.on("QuizEnded", (quizId, userId) => {
            console.log(
                `[Hub] :x: QuizEnded: quizId=${quizId}, userId=${userId}`,
            );
            setQuizStatus("ended");
        });

        // Обробник завершення квізу та відображення результатів
        connection.on(
            "QuizCompleted",
            (quizId, correctAnswers, totalQuestions, score) => {
                console.log(
                    `[Hub] :trophy: QuizCompleted: quizId=${quizId}, score=${score}%`,
                );
                setResult({ correctAnswers, totalQuestions, score });
                setQuizStatus("completed");
                setSubmitted(true);
            },
        );

        return () => {
            connection.off("QuizStarted");
            connection.off("UpdateQuizTime");
            connection.off("QuizEnded");
            connection.off("QuizCompleted");
        };
    }, [connection]);

    // Функція для запуску квізу з userId
    const startQuiz = async (quizId: string, userId: string) => {
        if (!connection) return;

        try {
            console.log(`[Console] :fire: Запуск квізу: ${quizId}...`);
            await connection.invoke("StartQuiz", quizId, userId);
        } catch (err) {
            console.error("[Console] :x: Помилка під час запуску квізу:", err);
        }
    };

    // Функція для отримання залишкового часу
    const getRemainingTime = async (quizId: string) => {
        if (!connection) return;

        try {
            console.log(
                "[Console] :arrows_counterclockwise: Отримання залишкового часу...",
            );
            await connection.invoke("GetQuizTime", quizId);
        } catch (err) {
            console.error("[Console] :x: Помилка при отриманні часу:", err);
        }
    };

    // Функція для надсилання відповідей
    const submitAnswers = async (
        quizId: string,
        userAnswers: Record<string, string>,
        userId: string,
    ) => {
        if (!connection || submitted) return;

        try {
            console.log("[Console] :memo: Надсилання відповідей...");
            await connection.invoke(
                "SubmitAnswers",
                quizId,
                userId,
                userAnswers,
            );
            setSubmitted(true);
        } catch (err) {
            console.error(
                "[Console] :x: Помилка при надсиланні відповідей:",
                err,
            );
        }
    };

    return {
        time: quizTime,
        status: quizStatus,
        result,
        startQuiz,
        getRemainingTime,
        submitAnswers,
    };
};
