import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

import './Messages.css';

const Messages = ({ messages, name,avatar }) => (
  <ScrollToBottom initialScrollBehavior='smooth' className="messages">
    {messages.map((message, i) => <div key={i}><Message avatar={avatar} message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;