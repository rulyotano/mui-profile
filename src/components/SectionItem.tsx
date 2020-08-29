import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

export default function SectionItem({ title = "", children }) {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Typography className={classes.title} variant="h5" component="h1" gutterBottom>{title}</Typography>
      <Divider variant="middle" />
      <Box m={2}>
        {children}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2)
  }
}))
