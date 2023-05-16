import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

const Message = ({
    message: { text, user, type = '', fileData = '' },
    name,
    avatar,
}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (type === 'image') {
        return (
            <div
                className={`messageContainer ${
                    isSentByCurrentUser ? 'justifyEnd' : 'justifyStart'
                }`}
            >
                <div className="media">
                    <img
                        src={fileData}
                        height="100%"
                        width="100%"
                        style={{ borderRadius: 4 }}
                        alt="media"
                    />
                </div>
            </div>
        );
    }

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return isSentByCurrentUser ? (
        <div className="messageContainer justifyEnd">
            {/* <p className="sentText pr-10">{trimmedName}</p> */}
            <div className=" messageBoxRight backgroundBlue">
                <p className="messageText colorWhite">
                    {ReactEmoji.emojify(text)}
                </p>
            </div>
            {/* <p>{new Date().toLocaleTimeString()}</p> */}
        </div>
    ) : (
        <>
            {user === 'admin' ? (
                <div className="admin sep">
                    <p className="colorAdmin">{ReactEmoji.emojify(text)}</p>
                </div>
            ) : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">
                            {ReactEmoji.emojify(text)}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Message;
