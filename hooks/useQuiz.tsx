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

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(`${process.env.NEXT_PUBLIC_SOCKET_URL}/quizTimerHub`)
            .withAutomaticReconnect()
            .build();

        newConnection.on(
            "QuizStarted",
            (_quizId: string, _startTime: string, duration: number) => {
                console.log("Quiz started");
                setQuizStatus("started");
                setQuizTime(duration);
            },
        );

        newConnection.on(
            "UpdateQuizTime",
            (_quizId: string, remainingTime: number) => {
                setQuizTime(remainingTime);
            },
        );

        newConnection.on("QuizEnded", (_quizId: string) => {
            console.log("Quiz ended");
            setQuizStatus("ended");
        });

        newConnection.on(
            "QuizCompleted",
            (
                _quizId: string,
                correctAnswers: number,
                totalQuestions: number,
                score: number,
            ) => {
                console.log("Quiz completed");
                setResult({ correctAnswers, totalQuestions, score });
                setQuizStatus("completed");
            },
        );

        newConnection
            .start()
            .then(() => {
                console.log("Connected to QuizTimerHub");
                setConnection(newConnection);
            })
            .catch(console.error);

        return () => {
            newConnection.stop();
        };
    }, []);

    const startQuiz = (quizId: string) => {
        if (connection) {
            connection.invoke("StartQuiz", quizId).catch(console.error);
        }
    };

    const submitAnswers = (quizId: string, answers: Record<string, string>) => {
        if (connection) {
            connection
                .invoke("SubmitAnswers", quizId, answers)
                .catch(console.error);
        }
    };

    return {
        time: quizTime,
        status: quizStatus,
        result,
        startQuiz,
        submitAnswers,
    };
};
