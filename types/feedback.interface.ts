import { User } from "./user.interface";

export interface Feedback {
    id: string;
    rating: number;
    comment: string;
    createdAt: string;
    author: User;
}
