export interface User {
    avatar: string | null;
    email: string;
    firstName: string | null;
    isAdmin: boolean;
    lastName: string;
}

export interface Profile extends User {
    avatar: string | null;
    email: string;
    firstName: string | null;
    isAdmin: boolean;
    lastName: string;
}
