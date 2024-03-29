import React from 'react'


function Message(props) {
    render() {
        return (
            <div className="message">
                <div className="message-username">{props.user}</div>
                <div className="message-text">{props.text}</div>
            </div>
        )
    }
}

export default Message;