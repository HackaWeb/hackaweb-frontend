import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

interface Message {
    user: string;
    text: string;
    timestamp: string;
}

export const useChat = () => {
    const [connection, setConnection] = useState<signalR.HubConnection | null>(
        null,
    );
    const [messages, setMessages] = useState<Message[]>([]);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (connection) return;

        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(`${process.env.NEXT_PUBLIC_SOCKET_URL}/chathub`, {
                transport: signalR.HttpTransportType.WebSockets,
                skipNegotiation: true,
            })
            .withAutomaticReconnect()
            .build();

        newConnection.on("ReceiveMessage", (user: string, text: string) => {
            setMessages((prev) => [
                ...prev,
                { user, text, timestamp: new Date().toLocaleTimeString() },
            ]);
        });

        newConnection
            .start()
            .then(() => {
                console.log("Підключено до чату");
                setIsConnected(true);
                setConnection(newConnection);
            })
            .catch(console.error);

        return () => {
            if (newConnection.state === signalR.HubConnectionState.Connected) {
                newConnection
                    .stop()
                    .then(() => console.log("Відключено від чату"));
            }
        };
    }, [connection]);

    const sendMessage = (user: string, text: string) => {
        if (
            !connection ||
            connection.state !== signalR.HubConnectionState.Connected
        ) {
            console.error("Немає підключення до чату");
            return;
        }

        connection.invoke("SendMessage", user, text).catch(console.error);
    };

    return { messages, sendMessage, isConnected };
};
