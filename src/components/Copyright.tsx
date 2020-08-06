import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import settings from "../settings.json";

export default function Copyright() {
  const websiteName = settings.companyName;
  const websiteUrl = settings.webSite;
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href={websiteUrl}>
        {websiteName}
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
