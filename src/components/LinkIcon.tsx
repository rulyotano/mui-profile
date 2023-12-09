import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Launch from '@material-ui/icons/Launch';

export default function ExpandButton({ }) {
  const classes = useStyles();

  return (
    <IconButton>
      <Launch />
    </IconButton>
  );
}

const useStyles = makeStyles((theme) => ({
 
}))
