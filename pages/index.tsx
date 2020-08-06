import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/components/Link';
import Copyright from '../src/components/Copyright';
import Avatar from '../src/components/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import settings from '../src/settings.json';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
}))

export default function Index() {
  const classes = useStyles();
  const name = settings.fullName;
  const imageSrc = settings.imageUrl;
  const role = settings.role;

  return (
    <Container maxWidth="sm">
      <Box my={4} display="flex" flexDirection="column" alignItems="center">
        <Avatar imgSrc={imageSrc} imgAlt={name}/>
        <Box m={1}/>
        <Typography variant="h4" component="h1" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          {role}
        </Typography>
        <Box m={2}/>

        <Copyright />
      </Box>
    </Container>
  );
}
