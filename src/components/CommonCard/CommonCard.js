import React from 'react'
import styled from 'styled-components'

export default function CommonCard({children, id}) {
    return (
        <CardWrapper id={id}>
            {children}
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    background-color: #fff;
    transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
    margin-top: 0;
    margin-bottom: 50px;
    padding: 65px 40px 60px;
    border-radius: 20px;
    position: relative;
    box-shadow: 0px 6px 15px 0px rgba(74,99,231,.2);
    min-height: 200px;
`