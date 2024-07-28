import React from 'react';
import { useQuery } from 'react-query';
import httpClient from '../../infrastructure/http-client';
import './styles.css';
import { MessageLisApiResponse } from './types';

const fetchMessages = async (): Promise<string[]> => {
    const response = await httpClient.get<MessageLisApiResponse>('/messages');
    return response.data.messages;
};

const MessageList: React.FC = () => {
    const { data } = useQuery<string[]>('messages', fetchMessages, {
        suspense: true,
        useErrorBoundary: true,
    });

    return (
        <ul className="list">
            {data?.map((msg, index) => (
                <li className="listItem" key={index}>{msg}</li>
            ))}
        </ul>
    );
};

export default MessageList;
