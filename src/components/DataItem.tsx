import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandButton from './ExpandButton';

export default function DataItem({ image = null, title = "", place = "", timePeriod = "", placeUrl = "", contentParagraphs = [] }) {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isExpandable = contentParagraphs && contentParagraphs.length > 0;

  return (
    <Card className={classes.root}>

      <Box display="flex" width="100%" justifyContent="space-between">
        <CardMedia
          component="img"
          alt={title}
          height="100"
          image={image}
          title={title}
          className={classes.image}
        />
        <Hidden xsDown>
          <Content classes={classes} title={title} place={place} timePeriod={timePeriod} placeUrl={placeUrl} />
        </Hidden>

        {isExpandable ? <Actions isExpanded={isExpanded} setIsExpanded={setIsExpanded} /> : null}
      </Box>

      <Hidden smUp>
        <CustomDivider classes={classes} />
        <Box display="flex">
          <Content classes={classes} title={title} place={place} timePeriod={timePeriod} placeUrl={placeUrl} />
        </Box>
      </Hidden>

      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CustomDivider classes={classes} />
        <CardContent className={classes.content}>
          {contentParagraphs.map((it, index) => <Typography className={classes.paragraph} component="p" key={index}>{it}</Typography>)}
        </CardContent>
      </Collapse>
    </Card>
  );
}

const CustomDivider = ({ classes }) => {
  return <Divider className={classes.mobileDivider} orientation="horizontal" />
}

const Content = ({ classes, title, place, placeUrl, timePeriod }) => {
  return (<CardContent className={classes.content}>
    <Typography variant="h6" component="h2" noWrap>
      {title}
    </Typography>
    <PlaceLink placeUrl={placeUrl}>
      <Typography variant="body2" color="textSecondary" component="p" noWrap>
        @{place} {" "}
        <Typography component="i">
          {timePeriod}
        </Typography>
      </Typography>
    </PlaceLink>
  </CardContent>)
}

const PlaceLink = ({ placeUrl, children }) => {
  if (placeUrl) return <Link href={placeUrl} color="inherit">{children}</Link>
  return <>{children}</>
}

const Actions = ({ isExpanded, setIsExpanded }) => {
  return (<CardActions>
    <ExpandButton expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
  </CardActions>)
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  content: {
    flexGrow: 1,
    overflow: "hidden"
  },
  mobileDivider: {
    width: "100%",
    marginBottom: theme.spacing(1),
  },
  image: {
    width: 100
  },
  paragraph: {
    textIndent: theme.spacing(1),
    textAlign: "justify"
  }
}))
