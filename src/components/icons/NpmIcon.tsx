import React, { useMemo } from 'react';
import { useTheme } from '@material-ui/core';

export default function NpmIcon({ height = null, width = null, useOriginalColor = false }) {
  const theme = useTheme();

  const color1 = useMemo(() => useOriginalColor ? "#CB3837" : theme.palette.text.primary, [useOriginalColor])
  const color2 = useMemo(() => useOriginalColor ? "#FFFFFF" : theme.palette.getContrastText(theme.palette.text.primary), [useOriginalColor])

  const heightValue = height || theme.spacing(3)
  const widthValue = width || theme.spacing(3)
  return (
    <svg version="1.1"
      xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={widthValue} height={heightValue} viewBox="0 0 18 7">
      <path fill={color1} d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z" />
      <polygon fill={color2} points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 " />
      <path fill={color2} d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z" />
      <polygon fill={color2} points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 " />
    </svg>
  );
}
