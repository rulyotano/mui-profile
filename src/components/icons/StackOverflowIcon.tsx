import React from 'react';
import { useTheme } from '@material-ui/core';

export default function Avatar({ height = null, width = null, useOriginalColor = false }) {
    const theme = useTheme();
    
    const color1 = useOriginalColor ? "#BCBBBB" : theme.palette.text.primary
    const color2 = useOriginalColor ? "#F48024" : theme.palette.text.primary

    const heightValue = height || theme.spacing(3)
    const widthValue = width || theme.spacing(3)
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={widthValue} height={heightValue} viewBox="-135 22 32 38">
            <polygon fill={color1} points="-108.5,56.2 -108.5,46.3 -105.2,46.3 -105.2,59.5 -135,59.5 -135,46.3 -131.7,46.3 -131.7,56.2       " />
            <path fill={color2} d="M-128,45.4l16.2,3.4l0.7-3.2l-16.2-3.4L-128,45.4z M-125.9,37.6l15,7l1.4-3l-15-7L-125.9,37.6z     M-121.7,30.2l12.7,10.6l2.1-2.5l-12.7-10.6L-121.7,30.2z M-113.5,22.4l-2.7,2l9.9,13.3l2.7-2L-113.5,22.4z M-128.4,52.9h16.6    v-3.3h-16.6V52.9z" />
        </svg>
    );
}
