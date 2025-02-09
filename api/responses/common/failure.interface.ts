export interface RequestError {
    field: string;
    message: string;
}

export const DEFAULT_FIELD_ERROR: RequestError = {
    field: "",
    message: "Сталася помилка, зверніться до розробників!",
};
