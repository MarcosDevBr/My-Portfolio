import React from 'react'
import BigText from '../BigText/BigText'
import { CardWrapper } from './styles'
import BigFilledButton from '../BigFilledButton/BigFilledButton'

export default function MainCard({id}) {
    return (
        <CardWrapper id={id}>
            <div className={'card-content'}>
                <BigText text={'Im Marcos Augusto'} fontSize={'60px'} />
                <p className={'main-text'}>
                    Desenvolvedor Front-End, crítico e proativo, tentando resultar 
                    no melhor do produto, agregando qualidade, eficiência e 
                    resultado.
                    
                    <p> Versátil em relação a stacks, conseguindo adaptar 
                        bem a 
                        novidades, tendo conforto em desenvolver em ferramentas 
                        sem experiência pessoal.
                    </p>

                </p>
                <div className={'buttons'}>
                    {/* <BigFilledButton /> */}
                </div>
            </div>
            <div className={'overlay-image'} />
        </CardWrapper>
    )
}

