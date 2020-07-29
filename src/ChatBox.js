import React from 'react'

const ChatBox = (props) => {

   const { setShowModal, from, to, chats} = props;

    const handleSend = (e) => {
        let str = '';
        str = document.getElementById("msg").value
        if(str!=='') {
            chats.push({from: from, to: to, msg: str})
        }
        setShowModal({showModal: false, to: to})
    }

    const handleClose = (e) => {
        setShowModal({showModal: false, to: to})
    }

    return (
        <div onClick={handleClose} style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}>
        <div onClick={(e) => e.stopPropagation()} style={{
            padding: 20,
            background: '#fff',
            borderRadius: '2px',
            display: 'inline-block',
            minHeight: "300px",
            margin: "1rem",
            position: "relative",
            minWidth: "300px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            
        }}>
            <input id="msg" type="text" placeholder="Type Here"></input>
            <div>{`${from.name} to ${to.name}`}</div>
            <div className="chatbox-buttons">
                <button type="submit" className="button-chatbox-send" onClick = {handleSend}>Send</button>
                <button type="submit" className="button-chatbox-cancel" onClick={handleClose}>Cancel</button>
            </div>
        </div>
        </div>
    );
}

export default ChatBox;