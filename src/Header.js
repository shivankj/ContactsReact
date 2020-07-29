import React from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core'
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import UserName from './UserName'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      height: "80px",
      width: "80px"
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }));

function initialsOf(headerName) {
  let initials='';
  if(headerName) {
    initials = initials.concat(...headerName.split(' ').map(item => item[0]));
  }
  return initials;
}

const Header = (props) => {
    const classes = useStyles();
    const { headerDetails } = props;
    let initials = initialsOf(headerDetails.name);

    const handleClick = () => {
      alert("onClick");
    }

    return (
        <div className="header">
            <Avatar className={classes.orange} onClick={handleClick}>{initials}</Avatar>
            <UserName headerName={headerDetails.name}/>
        </div>
    );
}

export default Header;

