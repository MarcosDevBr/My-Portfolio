import React from 'react'
import styled from 'styled-components'

export default function BigText({ text, fontSize = '28px' }) {
    return (
        <BigTextWrapper fontSize={fontSize}>
            {text}
        </BigTextWrapper>
    )
}

const BigTextWrapper = styled.h2`
    display: block;
    font-size: ${props => props.fontSize};
    font-weight: 700;
    font-family: "Poppins",sans-serif;
    margin-top: 1rem !important;
    color: #fff;
    margin-bottom: 0px;
    cursor: pointer;
`