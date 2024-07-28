import React, {useCallback, useState} from 'react';
import { useMutation, useQueryClient } from 'react-query';
import './styles.css';
import Input from '../Input';
import Button from '../Button';
import httpClient from '../../infrastructure/http-client';
import {SendMessageApiResponse} from './types.ts';

const postMessage = async (message: string): Promise<SendMessageApiResponse> => {
    const response = await httpClient.post<SendMessageApiResponse>('/send-message', { message });
    return response.data;
};

const MessageInput: React.FC = () => {
    const [message, setMessage] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation(postMessage, {
        onSuccess: () => {
            queryClient.invalidateQueries('messages');
        },
    });

    const handleMessage = useCallback(() => {
        mutation.mutate(message);
        setMessage('');
    }, [message, mutation]);

    const handleClick = useCallback(() => {
        if (message.trim() !== '') {
            handleMessage();
        }
    }, [message, handleMessage]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && message.trim() !== '') {
            handleMessage();
        }
    }, [message, handleMessage]);

    return (
        <div className="message-input-container">
            <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button title="Send" handleClick={handleClick} />
        </div>
    );
};

export default MessageInput;
