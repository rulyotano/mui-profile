import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function ReferenceIcon({ icon: Icon, description = "", href = "" }) {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Icon />
      <Box ml={1} />
      <Typography>
        {href ? <Link href={href} color="inherit">{description}</Link> : description}
      </Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))
