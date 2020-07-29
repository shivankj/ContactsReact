import React from 'react'
import './App.css'
import ChatIcon from '@material-ui/icons/Chat';
//import PortalChatBox from './PortalChatBox';

const ContactItem = (props) => {
    const {obj, setHeaderDetails, setShowModal } = props;

    const handleSelect = (e) => {
        //console.log(obj.name);
        setHeaderDetails(obj);
        setShowModal({showModal: false, to: {}});
    }

    const handleMessage = (objTo, e) => {
        e.stopPropagation();
        // console.log(obj.name, objTo);
        setShowModal({showChatBox: true, to: objTo});
    }

    return (
        <div className="contact-item" onClick={handleSelect}>
            <div className="contact-name-send">
                <div className="contact-item-name">{obj.name}</div>
                <ChatIcon className="send-message" id={obj.email} onClick={(e) => handleMessage(obj, e)}/>
            </div>
            <div className="contact-item-email">{obj.email}</div>
            <div className="contact-item-phno">{obj.phno}</div>
        </div>
    );
}

export default ContactItem; 