import useWebSocket from '../../hooks/useWebSocket.ts';
import MessageList from '../MessageList';
import MessageInput from '../MessageInput';
import './styles.css';

const MessageContainer = () => {
    useWebSocket();

    return (
        <div className="message-container">
            <h1>Message App</h1>
            <MessageList />
            <MessageInput />
        </div>
    );
};

export default MessageContainer;
