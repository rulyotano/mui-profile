import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ExpandButton from './ExpandButton';
import Collapse from '@material-ui/core/Collapse';

export default function SectionItem({ title = "", initiallyExpanded = false, children }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(initiallyExpanded);
  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box display="flex" justifyContent="space-between" onClick={toggleExpanded} >
        <Typography className={classes.title} variant="h5" component="h1" gutterBottom>{title}</Typography>
        <ExpandButton expanded={expanded} />
      </Box>
      <Divider variant="middle" />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box m={2}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2)
  }
}))
