import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { getGoogleImageWithSize } from 'utils/googlePhotos';
import ActionButton from 'components/ActionButton';
import BlogIcon from 'components/icons/DrupalIcon';
import WebIcon from '@material-ui/icons/ShoppingCart';

type ArticleDataItemPropsType = {
  image: string,
  author: string,
  title: string,
  url: string,
  blog: string,
  contentParagraphs: string[]
}

export default function BookDataItem({ image = null, author = "", title = "", url = "", blog = "", contentParagraphs = [] }: ArticleDataItemPropsType) {
  const classes = useStyles();

  const imageWithSize = useMemo(() => getGoogleImageWithSize(image, 350), [image]);

  return (
    <CustomLink url={blog}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageWithSize}
            title={title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            
            <Typography gutterBottom variant="subtitle1" component="p">
              {author}
            </Typography>

            {contentParagraphs.map(paragraph =>
              <Typography variant="body2" color="textSecondary" component="p" key={paragraph.substring(0, 11)}>
                {paragraph}
              </Typography>)}
          </CardContent>
        </CardActionArea>
        <CardActions >
          <ActionButton url={blog} icon={<BlogIcon />} />
          <ActionButton url={url} icon={<WebIcon />} />
        </CardActions>
      </Card>
    </CustomLink>
  );
}

const CustomLink = ({ url, children }) => {
  if (url) return <Link href={url} target="_blank" color="inherit">{children}</Link>
  return <>{children}</>
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  media: {
    height: 250,
  },
  cardContent: {
    height: theme.spacing(40)
  }
}))
