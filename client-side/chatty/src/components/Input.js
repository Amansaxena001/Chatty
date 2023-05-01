import React from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import './Input.css';

const Input = ({ setMessage, sendMessage, message, socket }) => {
    const handleOnChange = (file) => {
        socket.emit('upload', file.fileList[0], (status) => {
            console.log(status, 'Statue');
        });
    };

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const sendImage = async (file) => {
        const base64File = await getBase64(file.file);
        if (base64File.length) {
            socket.emit('upload', base64File, (status) => {
                console.log(status, 'Statue');
            });
        }
    };

    return (
        <form className="form">
            <div className="inputContainer">
                <input
                    className="input"
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                    onKeyPress={(event) =>
                        event.key === 'Enter' ? sendMessage(event) : null
                    }
                />
                <ImgCrop rotate>
                    <Upload
                        listType="none"
                        // fileList={fileList}
                        // onPreview={onPreview}
                        showUploadList={false}
                        customRequest={sendImage}
                        // beforeUpload={}
                    >
                        <img src="https://img.icons8.com/emoji/24/null/paperclip-emoji.png" />
                    </Upload>
                </ImgCrop>
            </div>

            <button className="sendButton" onClick={(e) => sendMessage(e)}>
                <img src="https://img.icons8.com/material-rounded/25/FFFFFF/filled-sent.png" />{' '}
            </button>
        </form>
    );
};
export default Input;
