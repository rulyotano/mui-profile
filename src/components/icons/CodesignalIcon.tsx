import React from 'react';
import { useTheme } from '@material-ui/core';

export default function CodesignalIcon({ height = null, width = null, useOriginalColor = false }) {
  const theme = useTheme();

  const color = useOriginalColor ? "#1d9dd8" : theme.palette.text.primary

  const heightValue = height || theme.spacing(3)
  const widthValue = width || theme.spacing(3)
  return (
    <svg id="Layer_1"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 768" width={widthValue} height={heightValue}>
      <path fill={color} d="M0 0h768v768H0z" />
      <path d="M85.8 158.1l229.1 41L384 471l69.1-272 229.1-41-41.6 64-142.7 20.5-17.9 57.7 92.2-10.2-30.7 50.6-76.2 7L384 609.9l-81.3-262.4-76.8-7-30.1-50.6 91.5 9.6-17.3-57.6-142.7-19.8-41.5-64z" />
    </svg>
  );
}
