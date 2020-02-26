import React from 'react'
import styled from 'styled-components'

export default function CardTitle({title = 'insert text here'}) {
    return (
        <CardTitleWrapper>
            {title}
        </CardTitleWrapper>
    )
}

const CardTitleWrapper = styled.h3`
    box-sizing: border-box;
    margin: 0;
    font-size: 24px;
    color: #000;
    font-family: "Poppins",sans-serif;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    line-height: 1.2;
    overflow-wrap: break-word;
    &::after {
        content: "";
        background: #ff5959;
        border-radius: 25px;
        display: block;
        height: 5px;
        margin-top: 14px;
        width: 30px;
    }
`