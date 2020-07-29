import React, { useState } from 'react';
import './App.css'
import Header from './Header'
import ListOfContacts from './ListOfContacts'
import PortalChatBox from './PortalChatBox';
// import ChatBox from './ChatBox';
let chats = [];

const App = () => {
  const [headerDetails, setHeaderDetails] = useState({})
  const [showModal, setShowModal] = useState({showChatBox: false, to: {}});
  // const handleCloseModal = () => setShowModal({showChatBox: false, to: {}});

  return (
    <div className="App">
      <Header headerDetails={headerDetails}/>
      <ListOfContacts setShowModal={setShowModal} headerDetails={headerDetails} setHeaderDetails={setHeaderDetails} chats={chats} showModal={showModal}/>
      {
        showModal.showChatBox ?
        (<PortalChatBox setShowModal={setShowModal} chatFrom={headerDetails} chatTo={showModal.to} chats={chats}/>) : null  //onClose={handleCloseModal}
      }
      {/* {console.log("Chats", chats)} */}
    </div>
  );
}

export default App;