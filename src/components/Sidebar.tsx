import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SidebarMenu from "./SidebarMenu";
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
}))

export default function ApplicationBar({ isOpen = false, onClose = () => { } }) {
  const classes = useStyles();

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <SidebarMenu onClose={onClose} />
    </Drawer>
  );
}
