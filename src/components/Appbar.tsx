import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export default function ApplicationBar() {
  const classes = useStyles();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onSidebarClose = () => setIsSidebarOpen(false);
  const onSidebarOpen = () => setIsSidebarOpen(true);

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onSidebarOpen}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Sidebar isOpen={isSidebarOpen} onClose={onSidebarClose} />
    </AppBar>
  );
}
