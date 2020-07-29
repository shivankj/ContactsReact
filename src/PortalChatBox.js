import React from 'react';
import ReactDOM from 'react-dom'
import ChatBox from './ChatBox';

const PortalChatBox = (props) => {

    console.log('PortalChatBox');
    //const {onClose} = props;
    const { setShowModal, chatFrom, chatTo, chats} = props;

    return ReactDOM.createPortal(
        <ChatBox setShowModal={setShowModal} from={chatFrom} to={chatTo} chats={chats}/>,  //onClose={onClose}
        document.getElementById("portal-dom")
    );
}

export default PortalChatBox;