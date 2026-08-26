import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';
import settings from 'data.json';
import gravatar from "gravatar.json";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [gravatarItem] = gravatar.entry;

  const pageIcon = `${gravatarItem.thumbnailUrl}?s=20`;
  const profileImage = `${gravatarItem.thumbnailUrl}?s=300`;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const name = settings.fullName;
  const role = settings.role;
  const iconUrl = settings.imageIconUrl;

  return (
    <React.Fragment>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R5S2L5F0HC"></script>
        <script src="./google-analytics-init.js"></script>
        <title>{name}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content={role} />
        <meta property="og:title" content={name} />
        <meta property="og:image" content={iconUrl} />
        <meta property="og:description" content={role}></meta>
        <link href={iconUrl} rel="icon" type="image/x-icon"></link>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
