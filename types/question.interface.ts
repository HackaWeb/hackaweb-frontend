import { QuestionType } from "./question.type";

export interface ChoiceOption {
    index?: number;
    title: string;
    isCorrect: boolean;
}

export interface ChoiceOptionWhileTesting {
    title: string;
    id: string;
    questionId: string;
}

export interface Question {
    id: string;
    text: string;
    type: number;
    choiceOptions: ChoiceOption[];
    mediaUrl?: string;
    fileType?: "image" | "video";
}

export interface QuestionWhileTesting {
    id: string;
    text: string;
    quizId: string;
    type: number;
    options?: ChoiceOptionWhileTesting[];
    mediaUrl?: string;
}

/* 
id
: 
"91391185-91b0-4a5d-b6db-3633da6cb944"
options
: 
Array(4)
0
: 
id
: 
"02b9571d-6247-4ca6-9077-ebb6d7bfedaf"
questionId
: 
"91391185-91b0-4a5d-b6db-3633da6cb944"
title
: 
"aa"
[[Prototype]]
: 
Object
1
: 
{id: '16d0524e-a849-4ef0-8654-189942803e1b', title: 'nike', questionId: '91391185-91b0-4a5d-b6db-3633da6cb944'}
2
: 
{id: '535822d4-295c-45ed-b32c-d23d331c66f1', title: 'bb', questionId: '91391185-91b0-4a5d-b6db-3633da6cb944'}
3
: 
{id: '97b6297c-e706-4089-8d71-0034143b1e19', title: 'adidas', questionId: '91391185-91b0-4a5d-b6db-3633da6cb944'}
length
: 
4
[[Prototype]]
: 
Array(0)
quizId
: 
"d3e269b3-b814-4ad6-a9f2-74d6986e0746"
text
: 
"Who is producer?"
type
: 
1
*/

// якщо тип інпут, options: [{ title: string, isCorrect: true }]
// якщо тип choice, то options:  [{ title: string, isCorrect: boolean }]
// якщо тип boolean, то options: [{ title: "True", isCorrect: false }, { title: "False", isCorrect: true }]
