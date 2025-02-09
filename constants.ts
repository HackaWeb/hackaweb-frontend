const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const TRY_AGAIN_MESSAGE = "Відбулась помилка. Спробуйте пізніше";

export const INVALID_INPUTES_MESSAGE =
    "Заповність усі обовʼязкові поля, щоб продовжити";

export const INVALID_EMAIL_MESSAGE = "Ваша пошта не є поштою";
export const INVALID_CONFIRMATION_PASSWORD_MESSAGE = "Паролі не збігаються";

export const validateEmail = (email: string) => emailRegex.test(email);
