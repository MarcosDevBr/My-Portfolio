import React from 'react'
import styled from 'styled-components'

const foto = require('../../assets/image.jpg')

export default function Picuture() {
    return (
        <PictureWrapper>
            <img src={foto}/>
        </PictureWrapper>
    )
}

const PictureWrapper = styled.div`
    img {
        height: 70px;
        width: 70px;
        border-radius: 50%;
    }
`