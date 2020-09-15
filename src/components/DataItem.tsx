import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Hidden from '@material-ui/core/Hidden';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandButton from './ExpandButton';

export default function DataItem({ image = null, title = "", subtitle = "", content = null }) {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={title}
        height="100"
        image={image}
        title={title}
        className={classes.image}
      />
      <Hidden xsDown>
        <Content classes={classes} title={title} subtitle={subtitle} />
      </Hidden>

      <Actions isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </Card>
  );
}

const Content = ({ classes, title, subtitle }) => {
  return (<CardContent className={classes.content}>
    <Typography gutterBottom variant="h6" component="h2" noWrap>
      {title}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p" noWrap>
      {subtitle}
    </Typography>
  </CardContent>)
}

const Actions = ({ isExpanded, setIsExpanded }) => {
  return (<CardActions>
    <ExpandButton expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
  </CardActions>)
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  content: {
    flexGrow: 1,
    overflow: "hidden"
  },
  image: {
    width: 150
  }
}))
