"use client";

import { useEffect, useState } from "react";
import { WaitingRoom } from "./WaitingRoom";
import { PlayingGame } from "./Playing";
import { Results } from "./Results";
import { QuestCompletingProps } from "./QuestCompleting.props";
import { QuestionWhileTesting } from "@/types/question.interface";
import { getQuestionsByQuestId, submitQuest } from "@/api/quests";
import { toast } from "react-toastify";
import { SubmitQuestResponseSuccess } from "@/api/responses/quest.type";

type Stage = "waiting" | "game" | "results";

export const QuestCompletingPageComponent = ({
    quest,
    user,
}: QuestCompletingProps) => {
    const [stage, setStage] = useState<Stage>("waiting");
    const [questions, setQuestions] = useState<QuestionWhileTesting[]>([]);
    const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
        null,
    );
    const [result, setResult] = useState<null | SubmitQuestResponseSuccess>(
        null,
    );

    const onStartQuestClick = async () => {
        try {
            const response = await getQuestionsByQuestId(quest.id);

            if (response && response.length) {
                setQuestions(response);
                setStage("game");

                const durationInSeconds = quest.duration * 60;
                setTimeLeft(durationInSeconds);

                const interval = setInterval(() => {
                    setTimeLeft((prevTime) => {
                        const newTime = Math.max(prevTime - 1, 0);
                        if (newTime <= 0) {
                            clearInterval(interval);
                            onCompleteTest();
                        }
                        return newTime;
                    });
                }, 1000);

                setTimerInterval(interval);
            } else {
                toast.error(
                    "Помилка при отриманні питань, спробуйте пізніше ще раз",
                );
            }
        } catch (error) {
            console.error(error);
            toast.error(
                "Помилка при отриманні питань, спробуйте пізніше ще раз",
            );
        }
    };

    console.log(userAnswers);

    const onCompleteTest = async () => {
        const formattedAnswers = {
            quizId: quest.id,
            userId: user.id,
            userAnswers: questions.map((question, index) => {
                const userAnswer = userAnswers[index];

                return {
                    questionType: question.type,
                    questionId: question.id,
                    answers: Array.isArray(userAnswer)
                        ? userAnswer.map((option) => ({
                              optionId: option.id,
                              text: undefined,
                          }))
                        : typeof userAnswer === "boolean"
                        ? [
                              {
                                  optionId:
                                      question.options?.[userAnswer ? 0 : 1]
                                          ?.id,
                                  text: undefined,
                              },
                          ]
                        : [
                              {
                                  optionId: undefined,
                                  text: userAnswer?.toString() || "",
                              },
                          ],
                };
            }),
        };

        try {
            console.log("Відправлення відповідей", formattedAnswers);
            /* const response = await submitQuest(quest.id, {
                userAnswers: formattedAnswers.userAnswers,
            }); */
            /* console.log(response); */
            return;

            if (true) {
                toast.success("Тест успішно завершено!");
                /* setResult(response); */
                setStage("results");
            } else {
                toast.error("Помилка при завершенні тестування");
            }

            /* const response = await submitAnswer(formattedAnswers); */
            /* console.log("Ответы отправлены:", response); */
        } catch (error) {
            console.error("Помилка при відправленні відповідей", error);
        }
    };

    useEffect(() => {
        return () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        };
    }, [timerInterval]);

    switch (stage) {
        case "waiting":
            return (
                <WaitingRoom
                    quest={quest}
                    onStartQuestClick={onStartQuestClick}
                />
            );

        case "game":
            return (
                <PlayingGame
                    user={user}
                    questions={questions}
                    onCompleteTest={onCompleteTest}
                    userAnswers={userAnswers}
                    setUserAnswers={setUserAnswers}
                    timeLeft={timeLeft}
                />
            );

        case "results":
            return <Results quest={quest} result={result} />;

        default:
            return <></>;
    }
};
