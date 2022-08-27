import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export default function ApplicationBar({ parent = null }) {
  const classes = useStyles();
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onIconClick = () => {
    if (parent) {
      router.push(parent);
      return;
    }
    onSidebarOpen();
  };
  const onSidebarClose = () => setIsSidebarOpen(false);
  const onSidebarOpen = () => setIsSidebarOpen(true);

  const Icon = parent ? ArrowBack : MenuIcon;

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onIconClick}>
          <Icon />
        </IconButton>
      </Toolbar>
      <Sidebar isOpen={isSidebarOpen} onClose={onSidebarClose} />
    </AppBar>
  );
}
