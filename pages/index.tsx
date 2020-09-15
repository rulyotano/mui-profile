import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DoneIcon from '@material-ui/icons/Done';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import Copyright from '../src/components/Copyright';
import Avatar from '../src/components/Avatar';
import ReferenceIcon from '../src/components/ReferenceIcon';
import SectionItem from '../src/components/SectionItem';
import StackOverflowItem from '../src/components/StackOverflowItem';
import StackOverflowIcon from '../src/components/icons/StackOverflowIcon';
import DataItem from '../src/components/DataItem';
import settings from '../src/settings.json';

export default function Index() {
  const name = settings.fullName;
  const imageSrc = settings.imageUrl;
  const role = settings.role;

  return (
    <Container maxWidth="md">
      <Box my={4} display="flex" flexDirection="column" alignItems="center">
        <Avatar imgSrc={imageSrc} imgAlt={name} />
        <Box m={1} />
        <Typography variant="h4" component="h1" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          {role}
        </Typography>
        <Box m={2} />

        <Box display="flex" flexDirection="row" alignItems="center">
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item>
              <ReferenceIcon icon={GitHubIcon} description="@rulyotano" href="https://github.com/rulyotano" />
            </Grid>
            <Grid item>
              <ReferenceIcon icon={LocationOnIcon} description="Madrid, Spain" href="https://en.wikipedia.org/wiki/Madrid" />
            </Grid>
            <Grid item>
              <ReferenceIcon icon={LinkedIn} description="in/raulotanohurtado" href="https://www.linkedin.com/in/raulotanohurtado/" />
            </Grid>
            <Grid item>
              <ReferenceIcon icon={StackOverflowIcon} description="stackoverflow/raúl-otaño" href="https://stackoverflow.com/users/1655482/ra%c3%bal-ota%c3%b1o" expandContent={<StackOverflowItem />} />
            </Grid>
          </Grid>
        </Box>

        <Box m={4} />

        <SectionItem title="Experience">
          <DataItem title="Senior Software Developer" subtitle="Mimacom" image="https://media-exp1.licdn.com/dms/image/C4E0BAQEDnFziUBYogg/company-logo_200_200/0?e=1607558400&v=beta&t=0ji-5IEK04VUMeznqWGyaiqxs1Rfst41WQ6MbNdwPQs" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </SectionItem>

        <Box my={2} />

        <SectionItem title="Education">
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </SectionItem>

        <Box my={2} />

        <SectionItem title="Tech staff" initiallyExpanded>
          {settings.techStaff.map(staff => <Box display="inline-block" key={staff} m={0.5}><Chip label={staff} onDelete={() => { }} deleteIcon={<DoneIcon />} /></Box>)}
        </SectionItem>

        <Box my={2} />

        <Copyright />
      </Box>
    </Container>
  );
}
