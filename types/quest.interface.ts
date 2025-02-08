import { User } from "./user.interface";

export interface Quest {
    id: string;
    title: string;
    description: string;
    rating: number;
    imageUrl: string;
    createdAt: string;
    owner: User;
}
