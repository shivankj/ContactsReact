import React from 'react'
import ContactItem from './ContactItem'
const ListOfContacts = (props) => {
    const { setShowModal, headerDetails, setHeaderDetails, chats, showModal } = props;
    const contacts=[
        {
            name: "Shivank Jaiswal",
            email: "jaiswalshivank4@gmail.com",
            phno: "7671858090"
        },
        {
            name: "Anuruddha Dey",
            email: "anuruddhadey@gmail.com",
            phno: "1234567789"
        },
        {
            name: "Shruti Hakl",
            email: "sjsti92@gmail.com",
            phno: "8908667980"
        }
    ]
    return (
        <div className="contacts-body">
            <div>
            {   
                contacts.map((obj) => {
                    return obj.email!==headerDetails.email?
                    <ContactItem setShowModal={setShowModal} key={obj.email} obj={obj} setHeaderDetails={setHeaderDetails}/>:null;
                })
            }
            </div>
            <div className="contact-display">
            {
                chats.map((item) => {
                    if(item.from.email===headerDetails.email && item.to.email===showModal.to.email) {
                        console.log(showModal)
                        return <div>{item.from.name} : {item.msg}</div>
                    }
                    if(item.from.email===showModal.to.email && item.to.email===headerDetails.email) {
                        return <div>{item.from.name} : {item.msg}</div>
                    }
                })
            }
            </div>
        </div>
    );
}

export default ListOfContacts;