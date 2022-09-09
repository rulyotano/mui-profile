import React from "react";
import Head from 'next/head';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Copyright from "components/Copyright";
import AppBar from "components/Appbar";
import ProjectDataItem from "components/projects/ProjectDataItem";
import settings from "settings.json";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Raul's some fun projects</title>
      </Head>
      <AppBar parent="/" />
      <Container maxWidth="md">

        <Box my={4} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4">Some interesting projects</Typography>
        </Box>

        <Grid container spacing={2}>
          {settings.projects.map(it => (
            <Grid key={it.title} item xs={12} md={4}>
              <ProjectDataItem
                title={it.title}
                image={it.image}
                contentParagraphs={it.contentParagraphs}
                webUrl={it.web}
                nugetUrl={it.nuget}
                githubUrl={it.github}
                npmUrl={it.npm}
              />
            </Grid>
          ))}
        </Grid>
        <Box my={4} display="flex" flexDirection="column" alignItems="center">
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
