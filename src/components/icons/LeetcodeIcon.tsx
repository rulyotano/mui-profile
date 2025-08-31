import React from 'react';
import { useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	line: {
		fill: "none",
		stroke: theme.palette.text.primary,
		strokeLinecap: "round",
		strokeLinejoin: "round",
	}
}))

export default function LeetcodeIcon({ height = null, width = null }) {
  const theme = useTheme();

  const heightValue = height || theme.spacing(3)
  const widthValue = width || theme.spacing(3)
	const classes = useStyles();
  return (
    <svg width={widthValue} height={heightValue} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
			<path className={classes.line} d="M33.8092,34.8772,26.8725,41.814a5.7258,5.7258,0,0,1-8.1154,0L8.6127,31.67a5.726,5.726,0,0,1,0-8.1155L18.7571,13.41a5.7258,5.7258,0,0,1,8.1154,0L34.5,21.0373"/>
			<path className={classes.line} d="M18.7571,13.41,27.7647,4.5"/>
			<path className={classes.line} d="M19.5838,27.5918h21.49"/>
		</svg>
  );
}
