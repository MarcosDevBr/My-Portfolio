import React from 'react'
import CommonCard from '../CommonCard/CommonCard'
import CardTitle from '../CardTitle/CardTitle'
import styled from 'styled-components'
import ProgressBar from '../ProgressBar/ProgressBar'
import VisibilitySensor from 'react-visibility-sensor'

const image = require('../../assets/image.jpg')

export default function CardSkills({id}) {

    return (
        <CommonCard id={id}>
            <div className={'title'} style={{ marginBottom: 70 }}>
                <CardTitle title={'My skills'} />
            </div>
            <CardContent>
                <div className={'text-content'}>
                    <p>
                        Versátil em relação a stacks, conseguindo adaptar bem a 
                        novidades, tendo conforto em desenvolver em ferramentas sem
                        experiência pessoal.                   
                     </p>
                </div>
              
                <ProgressBar text={'JavaScript'} Percentual={'90%'} stylePercentual={'90%'}/>
                <ProgressBar text={'HTML & CSS '} Percentual={'90%'} stylePercentual={'90%'}/>
                <ProgressBar text={'ReactJS '} Percentual={'70%'} stylePercentual={'70%'}/>
                <ProgressBar text={'NodeJs'} Percentual={'60%'} stylePercentual={'60%'}/>
                <ProgressBar text={'SQL  '} Percentual={'50%'} stylePercentual={'50%'}/>
                <ProgressBar text={'PHP   '} Percentual={'50%'} stylePercentual={'50%'}/>

            </CardContent>
        </CommonCard>
    )
}

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    .user-image {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        margin-right: 50px;
    }
    .text-content {
        flex: 1;
        h2 {
            color: #000;
            font-family: "Poppins",Sans-serif;
            font-size: 24px;
            font-weight: 700;
        }

        p {
            color: #777;
            font-family: "Open Sans",Sans-serif;
            font-size: 14px;
            
        }
    }
`