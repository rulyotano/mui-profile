import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Copyright from "components/Copyright";
import AppBar from "components/Appbar";
import ArticleDataItem from "components/articles/ArticleDataItem";
import settings from "settings.json";

export default function Articles() {

  return (
    <div>
      <AppBar parent="/" />
      <Container maxWidth="md">

        <Box my={4} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4">Articles</Typography>
        </Box>

        <Box my={4} display="flex" flexDirection="row" alignItems="right">
          {settings.articles.map(it => (
            <ArticleDataItem
              key={it.title}
              title={it.title}
              url={it.web}
              image={it.image}
            />
          ))}
        </Box>
        <Copyright />
      </Container>
    </div>
  );
}
