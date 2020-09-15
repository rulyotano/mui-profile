import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ExpandButton from './ExpandButton';
import Collapse from '@material-ui/core/Collapse';

interface ReferenceIconProps {
  icon?: any,
  description?: any,
  href?: string,
  expandContent?: any,
}

export default function ReferenceIcon({ icon: Icon, description = "", href = "", expandContent }: ReferenceIconProps) {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <Box display="flex" flexDirection="row" alignItems="center" height={48}>
        <Icon />
        <Box ml={1} />
        <Typography>
          {href ? <Link href={href} color="inherit">{description}</Link> : description}
        </Typography>
        {expandContent ? <ExpandButton expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} /> : null}
      </Box>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <Box display="flex" flexDirection="row" alignItems="center">
          {expandContent}
        </Box>
      </Collapse>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))
