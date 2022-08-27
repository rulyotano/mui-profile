import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { getGoogleImageWithSize } from 'utils/googlePhotos';

export default function ArticleDataItem({ image = null, title = "", url = "", contentParagraphs = [] }) {
  const classes = useStyles();

  const imageWithSize = useMemo(() => getGoogleImageWithSize(image, 350), [image]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageWithSize}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {contentParagraphs.map(paragraph =>
            <Typography variant="body2" color="textSecondary" component="p">
              {paragraph}
            </Typography>)}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
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
    maxWidth: 345,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1)
  },
  media: {
    height: 140,
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
