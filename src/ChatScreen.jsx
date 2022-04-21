import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

const ChatScreen = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: 'Elon',
            image: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/9/2020_9$largeimg_1725381654.jpeg',
            message: 'Whats Up'
        },
        {
            message: 'Nothing? You tell'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Elon</p>
            {
                messages.map(message => {
                    return (
                        message.name ? (
                            <div className="chatScreen__message">
                                <Avatar className="chat__image" alt={message.name} src={message.image} />
                                <p className="chatScreen__text">{message.message}</p>
                            </div>
                        ) 
                        : 
                        (
                            <div className="chatScreen__message">
                                <p className="chatScreen__textUser">{message.message}</p>
                            </div>
                        )
                        
                    )
                })
            }

            <form action=""  className="chatScreen__input">
                <input 
                type="text" 
                name="" className="chatScreen__inputField" 
                placeholder="Type a message..." 
                value={input}
                onChange = {e => setInput(e.target.value)} />
                <button 
                className="chatScreen__inputButton"
                onClick={handleSend}>Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
