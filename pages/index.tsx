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
import settings from "data.json";
import gravatar from "gravatar.json";

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
                  icon={HackerrankIcon}
                  description="hackerrank/rulyotano"
                  href="https://www.hackerrank.com/rulyotano"
                />
              </Grid>
              <Grid item>
                <ReferenceIcon
                  icon={CodesignalIcon}
                  description="codesignal/rulyotano"
                  href="https://app.codesignal.com/profile/rulyotano"
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
            </Grid>
          </Box>

          <Box m={4} />

          <SectionItem title="Experience">
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

          <SectionItemReference title="Articles" link="/articles"/>
          <Box my={2} />

          <SectionItemReference title="Projects" link="/projects"/>
          <Box my={2} />

          <SectionItemReference title="Read Books" link="/books"/>
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
    marginLeft: theme.spacing(2)
  }
}))