import React from 'react'
import styled from 'styled-components'

export default function SocialButton({socialLink = 'insira um link', icon = 'heart'}) {
    return (
        
        <SocialWrapper>
            <a href={socialLink} target="_blank" className={'icon-wrapper'}>
                <ion-icon className={'social-icon'} name={icon}></ion-icon>
            </a>

        </SocialWrapper>
    )
}

const SocialWrapper = styled.div`
    margin-right: 12px;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ff5959;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: white;
        .icon-wrapper {
         ion-icon {
             color: #ff5959 ;
         }
    }
    }

    .icon-wrapper {
         ion-icon {
             color: white ;
            font-size: 15px ;
         }
    }

`

