import React from "react";
import Head from 'next/head';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Copyright from "components/Copyright";
import AppBar from "components/Appbar";
import BookDataItem from "components/books/BookDataItem";
import settings from "data.json";

export default function Books() {

  return (
    <div>
      <Head>
        <title>Tech books I recommend</title>
      </Head>
      <AppBar parent="/" />
      <Container maxWidth="md">

        <Box my={4} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4">Tech books I recommend</Typography>
        </Box>

        <Grid container spacing={2}>
          {settings.recommendedBooks.map(it => (
            <Grid key={it.title} item xs={12} md={4}>
              <BookDataItem
                title={it.title}
                author={it.author}
                url={it.web}
                image={it.image}
                contentParagraphs={it.contentParagraphs}
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
