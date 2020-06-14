import React, { useEffect, useState } from 'react';
import { useSocket, useOn } from '@hilma/socket.io-react';

const Chat = ({ match: { params: { chatId } } }) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useOn('send-message', message => {
        setMessages(messages => [...messages, message]);
    });

    const socket = useSocket();

    useEffect(() => {
        (async () => {
            try {
                await socket.join(chatId);
            } catch (error) {
                console.log(error);
            }
        })();

        return async () => {
            try {
                await socket.leave(chatId);
            } catch (error) {
                console.log(error);
            }
        }
    }, [chatId]);

    return (
        <div>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={() => socket.emit('send-message', chatId, inputValue)}>send</button>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
        </div>
    );
}

export default Chat;