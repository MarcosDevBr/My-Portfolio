import React from 'react'
import styled from 'styled-components'

export default function BigFilledButton({ text = 'Insira um texto', icon = '', onClick }) {

    function onButtonClick() {
        if(!onClick) return
        onClick()
    }

    return (
        <ButtonWrapper>
            <div className={'icon-wrapper'}>
                <ion-icon className={'social-icon'} name={icon}></ion-icon>
            </div>
            <span>
                {text}
            </span>
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.a`
    box-shadow: none;
    text-decoration: none;
    box-sizing: border-box;
    padding: 10px 24px;
    font-size: 16px;
    color: #fff;
    background: #ff5959;
    border-radius: 100px;
    display: inline-block;
    font-family: "Open Sans",sans-serif;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    cursor: pointer;
    height: 46px;
    padding: 8px 22px;
    position: relative;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    overflow-wrap: break-word;
    &:hover {
        background: #4a63e7;
        color: #fff;
        box-shadow: 0px 8px 15px 0px rgba(0,0,0,.2)
    }

    .icon-wrapper {
         ion-icon {
             color: white ;
            font-size: 15px ;
            margin-bottom: -2px;
            margin-right: 10px;
         }
    }

    display: flex;
    align-items: center;
    width: fit-content;
`