import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAvatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}))

export default function Avatar({ imgSrc, imgAlt }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAvatar alt={imgAlt} src={imgSrc} className={classes.avatar} />
    </div>
  );
}
