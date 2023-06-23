import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LinkIcon from './LinkIcon';
// import Link from './Link';

export default function SectionItem({ title = "", link = "" }) {
  const classes = useStyles();

  return (
    <Link href={link} className={classes.link} color="inherit">
      <Box display="flex" flexDirection="column" width="100%">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5" component="h1" gutterBottom className={classes.title}>{title}</Typography>
          <LinkIcon />
        </Box>

        <Divider variant="middle" />
      </Box>
    </Link>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2)
  },
  link: {
    width: '100%'
  }
}))