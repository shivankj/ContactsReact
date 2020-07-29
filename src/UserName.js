import React from 'react'
import './App.css'

const UserName = (props) => {
    
    const { headerName } = props;

    return (
        <h1 className="username-text">{headerName}</h1>
    );
}

export default UserName;