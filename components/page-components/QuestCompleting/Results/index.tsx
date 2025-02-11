import { MakeReview } from "./MakeReview";
import { GeneralResults } from "./GeneralResults";
import { Actions } from "./Actions";
import { ResultsProps } from "./Results.props";

export const Results = ({ quest, result }: ResultsProps) => {
    return (
        <div className="relative">
            <div className="pt-2 sm:pt-16 px-4 relative bg-[url(/results-bg.png)] bg-cover bg-center">
                <img
                    src="/test.png"
                    alt="Питання"
                    className="mx-auto mt-3 rounded-lg w-full max-w-[400px]"
                />
                <h1 className="pt-10 pb-5 text-center text-xl xsm:text-3xl">
                    Вітаємо з проходженням <br />
                    <span className="text-purple">Назва тесту!</span>
                </h1>
            </div>
            <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6 w-full 2xl:px-20 px-4 items-start">
                <GeneralResults />
                <Actions />
                <MakeReview quest={quest} />
            </div>
        </div>
    );
};
