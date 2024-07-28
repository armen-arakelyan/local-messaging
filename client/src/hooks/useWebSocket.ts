import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import {MessageSocket} from '../enums';

const useWebSocket = () => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const socket = new WebSocket(import.meta.env.VITE_WEB_SOCKET_URL);

        socket.onmessage = (event) => {
            const { type, message, messages } = JSON.parse(event.data);

            switch (type) {
                case MessageSocket.INIT:
                    queryClient.setQueryData<string[]>('messages', messages);
                    break;
                case MessageSocket.ADD_MESSAGE:
                    queryClient.setQueryData<string[]>('send-message', (old) => old ? [...old, message] : [message]);
                    queryClient.invalidateQueries('messages');
                    break;
            }
        };

        return () => {
            socket.close();
        };
    }, [queryClient]);
};

export default useWebSocket;
