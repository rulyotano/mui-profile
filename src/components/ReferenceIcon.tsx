import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ExpandButton from './ExpandButton';
import Popover from '@material-ui/core/Popover';

interface ReferenceIconProps {
  icon?: any,
  description?: any,
  href?: string,
  expandContent?: any,
}

export default function ReferenceIcon({ icon: Icon, description = "", href = "", expandContent }: ReferenceIconProps) {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'icon-popover' : undefined;

  return (
    <>
      <Box display="flex" flexDirection="row" alignItems="center" height={48}>
        <Icon />
        <Box ml={1} />
        <Typography>
          {href ? <Link href={href} color="inherit">{description}</Link> : description}
        </Typography>
        {expandContent ? <ExpandButton expanded={isExpanded} onClick={handleClick} /> : null}
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {expandContent}
      </Popover>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))
