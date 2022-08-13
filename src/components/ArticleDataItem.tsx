import React, { useMemo } from 'react';
// import clsx from 'clsx';
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
import { getGoogleImageWithSize } from 'utils/googlePhotos';

export default function ArticleDataItem({ image = null, title = "", url = "", contentParagraphs = [] }) {
  const classes = useStyles();

  const imageWithSize = useMemo(() => getGoogleImageWithSize(image, 100), [image]);

  return (
    <Card className={classes.root}>

      <Box display="flex" width="100%" justifyContent="space-between">
        <CardMedia
          component="img"
          alt={title}
          height="100"
          image={imageWithSize}
          title={title}
          className={classes.image}
        />
        <Hidden xsDown>
          <Content classes={classes} title={title} url={url} />
        </Hidden>
      </Box>

      <Hidden smUp>
        <CustomDivider classes={classes} />
        <Box display="flex">
          <Content classes={classes} title={title} url={url} />
        </Box>
      </Hidden>
    </Card>
  );
}

const CustomDivider = ({ classes }) => {
  return <Divider className={classes.mobileDivider} orientation="horizontal" />
}

const Content = ({ classes, title, url }) => {
  return (<CardContent className={classes.content}>
    <CustomLink url={url}>
      <Typography variant="h6" component="h2" noWrap>
        {title}
      </Typography>
    </CustomLink>
  </CardContent>)
}

const CustomLink = ({ url, children }) => {
  if (url) return <Link href={url} target="_blank" color="inherit">{children}</Link>
  return <>{children}</>
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
    width: 50,
    height: 50,
    margin: theme.spacing(2)
  },
  paragraph: {
    textIndent: theme.spacing(1),
    textAlign: "justify"
  }
}))
