import React from 'react'
import Chat from './Chat';

const Chats = () => {
    return (
        <div className='chats'>
            <Chat
                name='Mark'
                message = 'Yo whats up'
                timestamp="40 seconds ago"
                profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg"
            />
            <Chat
                name='Diljit'
                message = 'Hello, whats up'
                timestamp="50 seconds ago"
                profilePic="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/9/2020_9$largeimg_1725381654.jpeg"
            />
        </div>
    )
}

export default Chats
