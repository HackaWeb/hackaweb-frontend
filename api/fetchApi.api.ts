import { getCookie } from "@/helpers/getCookie";

interface FetchOptions {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    type?: "form" | "json";
    body?: unknown;
    isAuthRequired?: boolean;
}

export const fetchApi = async <T>({
    endpoint,
    method,
    body,
    isAuthRequired,
    type = "json",
}: FetchOptions): Promise<T> => {
    const headers: Record<string, string> = {
        accept: "text/plain",
    };

    if (type === "json") {
        headers["Content-Type"] = "application/json";
    }

    if (isAuthRequired) {
        const token = await getCookie("token");
        headers.Authorization = `Bearer ${token}`;
    }

    const isFormData = body instanceof FormData;

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
        {
            method,
            headers: isFormData
                ? headers
                : { ...headers, "Content-Type": "application/json" },
            body: isFormData
                ? (body as FormData)
                : body
                ? JSON.stringify(body)
                : undefined,
        },
    );

    return response.json();
};
