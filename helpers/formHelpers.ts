const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 100;

export const INVALID_EMAIL_MESSAGE = "Ваша пошта є неправильною";
export const INVALID_PASSWORD_MESSAGE = `Довжина пароля від ${MIN_PASSWORD_LENGTH} символів до ${MAX_PASSWORD_LENGTH}`;
export const INVALID_CONFIRMATION_PASSWORD_MESSAGE = "Паролів не збігаються";

export const isValidEmail = (email: string) => emailRegex.test(email);
export const isValidPasswordLength = (password: string) =>
    password.length >= MIN_PASSWORD_LENGTH &&
    password.length <= MAX_PASSWORD_LENGTH;
