import React from 'react'
import styled from 'styled-components'

export default function SubTitleText({text}) {
    return (
        <TextWrapper>
            {text}
        </TextWrapper>
    )
}

const TextWrapper = styled.span`
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
    font-family: "Open Sans",sans-serif;
`