import React, { useState, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'

export default function ProgressBar({ stylePercentual ='Bar-fill', text ='Inseira o texto', Percentual = 'Porcentagem Da skill'}) {

    const [progress, setProgress] = useState('0%')

    function onComponentAppearOnTheScreen(e) {
        if (e) {
            setTimeout(() => setProgress(stylePercentual), 1000)
        }
    }

    return (
        <VisibilitySensor onChange={onComponentAppearOnTheScreen}>
            <ProgressWrapper>
                <div className={'title'}>
                    <h3>
                       {text}
                </h3>
                
                
                <span>
                  {Percentual}
                </span>

                </div>
                <div className={'progress'}>
                    <div className={'bar-fill'} style={{ width: progress }} />
                </div>
            </ProgressWrapper>
        </VisibilitySensor>

    )
}

const ProgressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 1rem!important;
            color: #000;
            font-family: "Poppins",sans-serif;
               
        }
        span {

            color: #777;
            background-color: none;
            font-family: "Open Sans",sans-serif;
            font-size: 14px;
            line-height: 1.7;
            overflow-x: hidden;
            
        }
    }
    .progress {
        width: 100%;
        height: 3px;
        margin-bottom: 0;
        overflow: hidden;
        background-color: #ebebeb;
        border-radius: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
        .bar-fill {
            transition: width 1s;
            height: 100%;
            font-size: 12px;
            line-height: 3px;
            color: #fff;
            text-align: center;
            background-color: #ff5959;
            width: 60%;
        }
    }
`