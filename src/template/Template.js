import React from 'react'
import { TemplateWrapper, MenuSider, Content} from './styles'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export default function Template({ sider, content }) {

    useScrollPosition(({ prevPos, currPos }) => {
        console.log(currPos.x)
        console.log(currPos.y)
    })

    return (
        <TemplateWrapper className={'wrapper-template'}>
            <MenuSider>
                {sider}
            </MenuSider>
            <Content className={'content-style'}>
                {content}
            </Content>
        </TemplateWrapper>
    )
}