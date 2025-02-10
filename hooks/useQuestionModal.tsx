import {
    CustomSelectOption,
    SelectOption,
} from "@/types/selectOption.interface";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import {
    selectModals,
    selectPrev,
    toggleModal,
} from "@/store/slices/modals/modals";
import {
    selectEditingQuestion,
    selectQuestions,
    setEditingId,
} from "@/store/slices/questions/questions";
import { selectOptions, setOptions } from "@/store/slices/options/options";
import { toast } from "react-toastify";
import { ModalType } from "@/store/slices/modals/modals.types";
import { BooleanAnswer } from "@/components/Modals/CreateQuestion/BooleanAnswer";
import { InputAnswer } from "@/components/Modals/CreateQuestion/InputAnswer";
import { Choice } from "@/components/Modals/CreateQuestion/ChoiceAnswer";

const questionTypes: CustomSelectOption[] = [
    {
        title: "Відкритого типу",
        value: "input",
    },
    {
        title: "Вибір з варіантами",
        value: "choice",
    },
    {
        title: "Правда/Брехня",
        value: "boolean",
    },
];

export const useQuestionModal = () => {
    const dispatch = useAppDispatch();
    const modals = useAppSelector(selectModals);
    const questions = useAppSelector(selectQuestions);
    const question = useAppSelector(selectEditingQuestion);
    const prevModal = useAppSelector(selectPrev);
    const options = useAppSelector(selectOptions);

    const [file, setFile] = useState<string | null>(null);
    const [title, setTitle] = useState<string>("");
    const [fileType, setFileType] = useState<"image" | "video" | null>(null);
    const [questionType, setQuestionType] = useState<SelectOption | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];

        if (uploadedFile) {
            const fileURL = URL.createObjectURL(uploadedFile);
            const isVideo = uploadedFile.type.includes("video");

            setFile(fileURL);
            setFileType(isVideo ? "video" : "image");
        }
    };

    useEffect(() => {
        dispatch(setOptions(question?.options || []));
        if (question?.type !== questionType?.value) dispatch(setOptions([]));
    }, [question, questionType]);

    const renderQuestionTitle = () => {
        switch (question?.type) {
            case "input":
                return "Відкритого типу";
            case "choice":
                return "Вибір з варіантами";
            case "boolean":
                return "Правда/Брехня";
            default:
                return "";
        }
    };

    const renderGetAnswer = () => {
        switch (questionType?.value) {
            case "input":
                return <InputAnswer />;
            case "choice":
                return <Choice />;
            case "boolean":
                return <BooleanAnswer />;
            default:
                return <></>;
        }
    };

    const resetOptions = (modal: ModalType, msg: string) => {
        setTitle("");
        setFile(null);
        setQuestionType(null);
        dispatch(setOptions([]));
        dispatch(setEditingId(null));
        dispatch(toggleModal(modal));
        if (prevModal) dispatch(toggleModal(prevModal));
        toast.success(msg);
    };

    return {
        questionTypes,
        questionType,
        renderGetAnswer,
        onFileUpload,
        file,
        fileType,
        setFile,
        setQuestionType,
        renderQuestionTitle,
        dispatch,
        modals,
        question,
        prevModal,
        options,
        fileInputRef,
        title,
        questions,
        setTitle,
        resetOptions,
    };
};
