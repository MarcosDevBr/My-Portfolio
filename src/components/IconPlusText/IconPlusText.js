import React from 'react'
import styled from 'styled-components'
import { FaBeer } from 'react-icons/io';

export default function IconPlusText(
    {text = 'insert text', 
    icon = 'home', 
    extraMargin = false,
    onCebolinha,
    activeMenuItem
}) {

    function onClickIconPlusText() {
        if(!onCebolinha) return
        onCebolinha(icon)
        scrollTo(icon)
    }

    /*eslint-disable */

    function scrollTo(hash) {
        location.hash = "#" + hash;
    }

    return (
        
        <IconPlusTextWrapper 
            extraMargin={extraMargin} 
            onClick={onClickIconPlusText}
            isActive={ activeMenuItem === icon}
            href={`#${icon}`}
        >

            <StyledIcon>
                <ion-icon  name={icon}></ion-icon>
            </StyledIcon>
            <StyledText>
                {text}
            </StyledText>
        </IconPlusTextWrapper>
    )
}

const IconPlusTextWrapper = styled.a`

    margin-left: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 36px;
    align-items: center;
    margin-top: ${props => props.extraMargin ? '90px' : '0px'};
    cursor: pointer;
    transition: margin 0.5s;
    text-decoration: none;
    &:hover {
        margin-left: 5px;
    }

    &::after {
        content: '';
        background-color: red;
        height: 20px;
        width: 3px;
        color: red;
        position: absolute;
        left: 0;
        visibility: ${props => props.isActive ? 'visible' : 'hidden'}
    }

`

const StyledIcon = styled.div`
    ion-icon {
        display: inline-block;
        margin-left: 0;
        padding: 0;
        transition: all .3s ease-in-out;
        font-size: 14px;
        -webkit-tap-highlight-color: transparent;
        font-weight: 400;
        color: #ffffff;
        margin-right: 15px;
    }
`

const StyledText = styled.span`
    font-family: "Poppins",sans-serif;
    display: inline-block;
    margin-left: 0;
    padding: 0;
    transition: all .3s ease-in-out;
    font-size: 14px;
    -webkit-tap-highlight-color: transparent;
    font-weight: 400;
    color: white;
`