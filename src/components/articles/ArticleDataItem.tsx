import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { getGoogleImageWithSize } from 'utils/googlePhotos';

type ArticleDataItemPropsType = {
  image: string,
  title: string,
  url: string,
  contentParagraphs: string[]
}

export default function ArticleDataItem({ image = null, title = "", url = "", contentParagraphs = [] } : ArticleDataItemPropsType) {
  const classes = useStyles();

  const imageWithSize = useMemo(() => getGoogleImageWithSize(image, 350), [image]);

  return (
    <CustomLink url={url}>
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
            {contentParagraphs.map(paragraph =>
              <Typography variant="body2" color="textSecondary" component="p" key={paragraph.substring(0, 11)}>
                {paragraph}
              </Typography>)}
          </CardContent>
        </CardActionArea>
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
    height: 140,
  },
  cardContent: {
    height: theme.spacing(30)
  }
}))
