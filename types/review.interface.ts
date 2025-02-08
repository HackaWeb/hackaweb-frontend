import { User } from "./user.interface";

export interface Review {
    id: string;
    rating: number;
    comment: string;
    createdAt: string;
    owner: User;
}
