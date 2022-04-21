import React from 'react'
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import './Chat.css';

const Chat = ({name, message, timestamp, profilePic}) => {
    return (
        <Link to={`chats/${name}`}>
            <div className="chat">
                <Avatar className="chat__image" alt={name} src={profilePic} />
                <div className="chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat__timestamp">{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat
