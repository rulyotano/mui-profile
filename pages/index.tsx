import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DoneIcon from "@material-ui/icons/Done";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Copyright from "components/Copyright";
import Avatar from "components/Avatar";
import ReferenceIcon from "components/ReferenceIcon";
import SectionItem from "components/SectionItem";
import StackOverflowItem from "components/StackOverflowItem";
import StackOverflowIcon from "components/icons/StackOverflowIcon";
import HackerrankIcon from "components/icons/HackerrankIcon";
import CodesignalIcon from "components/icons/CodesignalIcon";
import MediumIcon from "components/icons/MediumIcon";
import SectionItemReference from "components/SectionItemReference";
import DataItem from "components/DataItem";
import MineIcon from "@material-ui/icons/Brightness5Outlined";
import BlogIcon from "components/icons/DrupalIcon";
import settings from "data.json";
import gravatar from "gravatar.json";
import LeetcodeIcon from "components/icons/LeetcodeIcon";

export default function Index() {
  const name = settings.fullName;
  const role = settings.role;
  const [gravatarItem] = gravatar.entry;

  const profileImage = `${gravatarItem.thumbnailUrl}?s=160`;
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md">
        <Box my={4} display="flex" flexDirection="column" alignItems="center">
          <Avatar imgSrc={profileImage} imgAlt={name} />
          <Box m={1} />
          <Typography variant="h4" component="h1" gutterBottom align="center">
            {name}
          </Typography>
          <Typography variant="h6" component="h6" gutterBottom align="center">
            {role}
          </Typography>
          <Box m={2} />

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            paddingLeft={2}
            paddingRight={2}
          >
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item>
                <ReferenceIcon
                  icon={GitHubIcon}
                  description="@rulyotano"
                  href="https://github.com/rulyotano"
                />
              </Grid>
              <Grid item>
                <ReferenceIcon
                  icon={LocationOnIcon}
                  description="Madrid, Spain"
                  href="https://en.wikipedia.org/wiki/Madrid"
                />
              </Grid>
              <Grid item>
                <ReferenceIcon
                  icon={LinkedIn}
                  description="in/raulotanohurtado"
                  href="https://www.linkedin.com/in/raulotanohurtado/"
                />
              </Grid>
              <Grid item>
                <ReferenceIcon
                  icon={StackOverflowIcon}
                  description="stackoverflow/raúl-otaño"
                  href="https://stackoverflow.com/users/1655482/ra%c3%bal-ota%c3%b1o"
                  expandContent={<StackOverflowItem />}
                />
              </Grid>
              <Grid item>
                <ReferenceIcon
                  icon={LeetcodeIcon}
                  description="leetcode/rulyotano"
                  href="https://leetcode.com/u/rulyotano/"
                />
              </Grid>
              <Grid item>
                <ReferenceIcon
                  icon={HackerrankIcon}
                  description="hackerrank/rulyotano"
                  href="https://www.hackerrank.com/rulyotano"
                />
              </Grid>
              <Grid item>
                <ReferenceIcon
                  icon={MediumIcon}
                  description="Medium"
                  href="https://medium.com/@rulyotano"
                />
              </Grid>
              <Grid item>
                <ReferenceIcon
                  icon={MailIcon}
                  description="contact@rulyotano.com"
                />
              </Grid>
              <Grid item>
                <ReferenceIcon
                  icon={MineIcon}
                  description="play-and-score@minesweeper"
                  href="https://minesweeper.rulyotano.com"
                />
              </Grid>
              <Grid item>
                <ReferenceIcon
                  icon={BlogIcon}
                  description="My blog"
                  href="https://blog.rulyotano.com"
                />
              </Grid>
            </Grid>
          </Box>

          <Box m={4} />

          <SectionItem title="HI! 👋 I'm Raul" initiallyExpanded={true}>
            <Typography variant="body1" component="p">I'm a passionate coder with expertise in web development, emphasizing clean code, good practices, and SOLID principles. I have a deep passion for coding, algorithms, data structures, and various web technologies.</Typography>

            <Box m={2} />
            <Typography variant="body1" component="p">I like system design topics and would love to help to create scalable and efficient solutions. "I'm also enthusiastic about contributing to open-source projects, enhancing libraries, and assisting fellow developers.</Typography>

            <Box m={2} />
            <Typography variant="body1" component="p">I'm eager to collaborate and create outstanding software with you!</Typography>

          </SectionItem>

          <Box m={2} />

          <SectionItem title="Highlighted used Tech" initiallyExpanded={true}>
            <div className={classes.techImages}>
              <img src="https://img.shields.io/badge/-ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="ReactJS" />
              <img src="https://img.shields.io/badge/-AngularJS-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="AngularJS" />
              <img src="https://img.shields.io/badge/-Vue-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue" />
              <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
              <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
              <img src="https://img.shields.io/badge/-.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white" alt=".NET" />
              <img src="https://img.shields.io/badge/-C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
              <img src="https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
              <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
              <img src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
              <img src="https://img.shields.io/badge/-Docker%20Swarm-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Swarm" />
              <img src="https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
              <img src="https://img.shields.io/badge/-K8s-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="K8s" />
              <img src="https://img.shields.io/badge/-Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" alt="K8s" />
            </div>
          </SectionItem>

          <Box my={2} />

          <SectionItem title="Experience" initiallyExpanded={true}>
            {settings.experience.map(it => (
              <DataItem
                key={it.title}
                title={it.title}
                place={it.place}
                placeUrl={it.placeUrl}
                image={it.image}
                timePeriod={it.timePeriod}
                contentParagraphs={it.contentParagraphs}
              />
            ))}
          </SectionItem>

          <Box my={2} />

          <SectionItem title="Education">
            {settings.education.map(it => (
              <DataItem
                key={it.title}
                title={it.title}
                place={it.place}
                placeUrl={it.placeUrl}
                image={it.image}
                timePeriod={it.timePeriod}
              />
            ))}
          </SectionItem>

          <Box my={2} />

          <SectionItemReference title="Articles" link="/articles" />
          <Box my={2} />

          <SectionItemReference title="Projects" link="/projects" />
          <Box my={2} />

          <SectionItemReference title="Read Books" link="/books" />
          <Box my={2} />

          <SectionItem title="Tech staff" initiallyExpanded>
            {settings.techStaff.map(staff => (
              <Box display="inline-block" key={staff} m={0.5}>
                <Chip label={staff} onDelete={() => { }} deleteIcon={<DoneIcon />} />
              </Box>
            ))}
          </SectionItem>

          <Box my={2} />

          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
  },
  techImages: {
    '& > img': {
      marginRight: theme.spacing(1)
    }
  }
}))