import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import NpmIcon from 'components/icons/NpmIcon';
import NugetIcon from 'components/icons/NugetIcon';
import WebIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import { getGoogleImageWithSize } from 'utils/googlePhotos';

type ProjectDataItemPropsType = {
  image: string,
  title: string,
  githubUrl: string,
  nugetUrl: string,
  webUrl: string,
  npmUrl: string,
  contentParagraphs: string[]
}

export default function ProjectDataItem(
  { image = null, title = "", githubUrl = "", nugetUrl = "", webUrl = "", npmUrl = "", contentParagraphs = [] }: ProjectDataItemPropsType) {
  const classes = useStyles();

  const imageWithSize = useMemo(() => getGoogleImageWithSize(image, 350), [image]);
  const onCardClick = () => {
    window.open(githubUrl, "_blank");
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onCardClick}>
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
      <CardActions >
        <ActionButton url={githubUrl} icon={<GitHubIcon />} />
        <ActionButton url={nugetUrl} icon={<NugetIcon />} />
        <ActionButton url={webUrl} icon={<WebIcon />} />
        <ActionButton url={npmUrl} icon={<NpmIcon />} />
      </CardActions>
    </Card>
  );
}

const ActionButton = ({ url, icon }) => {
  if (!url) return null;
  return <Link href={url} color="inherit" target="_blank">
    <Button size="small">
      {icon}
    </Button>
  </Link>
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  media: {
    height: 140,
  },
  cardContent: {
    height: theme.spacing(20)
  }
}))
