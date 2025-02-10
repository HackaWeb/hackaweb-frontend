const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const TRY_AGAIN_MESSAGE = "Відбулась помилка. Спробуйте пізніше";

export const INVALID_INPUTES_MESSAGE =
    "Заповність усі обовʼязкові поля, щоб продовжити";

export const INVALID_EMAIL_MESSAGE = "Ваша пошта не є поштою";
export const INVALID_CONFIRMATION_PASSWORD_MESSAGE = "Паролі не збігаються";
export const INVALID_EMAIL_OR_PASSWORD_MESSAGE = "Пошта або пароль невірні";
export const INVALID_PASSWORD_LENGTH_MESSAGE =
    "Пароль повинен містити принаймні 8 символів";
export const INVALID_PASSWORD_UPPERCASE_MESSAGE =
    "Пароль повинен містити принаймні одну велику літеру";
export const INVALID_PASSWORD_NUMBER_MESSAGE =
    "Пароль повинен містити принаймні одну цифру";
export const INVALID_PASSWORD_SPECIAL_CHARACTER_MESSAGE =
    "Пароль повинен містити принаймні один спеціальний символ";

export const validateEmail = (email: string) => emailRegex.test(email);
