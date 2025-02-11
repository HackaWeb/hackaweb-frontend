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
            (quizId: string, startTime: string, duration: number) => {
                console.log("Quiz started:", quizId);
                setQuizStatus("started");
                setQuizTime(duration);
            },
        );

        newConnection.on(
            "UpdateQuizTime",
            (quizId: string, remainingTime: number) => {
                setQuizTime(remainingTime);
            },
        );

        newConnection.on("QuizEnded", (quizId: string) => {
            console.log("Quiz ended:", quizId);
            setQuizStatus("ended");
        });

        newConnection.on(
            "QuizCompleted",
            (
                quizId: string,
                correctAnswers: number,
                totalQuestions: number,
                score: number,
            ) => {
                console.log("Quiz completed:", quizId);
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

    const getQuizTime = (quizId: string) => {
        if (connection) {
            connection.invoke("GetQuizTime", quizId).catch(console.error);
        }
    };

    const submitAnswers = (quizId: string, userId: string, answers: any[]) => {
        if (connection) {
            connection
                .invoke("SubmitAnswers", quizId, userId, answers)
                .catch(console.error);
        }
    };

    return {
        quizTime,
        quizStatus,
        result,
        startQuiz,
        getQuizTime,
        submitAnswers,
    };
};
