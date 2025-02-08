import { MakeReview } from "./MakeReview";
import { GeneralResults } from "./GeneralResults";
import { Actions } from "./Actions";

export const Results = () => {
    return (
        <div className="relative">
            <div className="pt-16 relative bg-[url(/results-bg.png)] bg-cover bg-center">
                <img
                    src="/test.png"
                    alt="Питання"
                    className="mx-auto mt-3 rounded-lg w-auto max-w-[400px]"
                />
                <h1 className="pt-10 pb-5 text-center">
                    Вітаємо з проходженням <br />
                    <span className="text-purple">Назва тесту!</span>
                </h1>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6 px-20 items-start">
                <GeneralResults />
                <Actions />
                <MakeReview />
            </div>
        </div>
    );
};
