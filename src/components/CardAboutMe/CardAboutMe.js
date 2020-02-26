import React from 'react'
import CommonCard from '../CommonCard/CommonCard'
import CardTitle from '../CardTitle/CardTitle'
import styled from 'styled-components'
import ProgressBar from '../ProgressBar/ProgressBar'
import BigFilledButton from '../BigFilledButton/BigFilledButton'


const image = require('../../assets/image.jpg')

export default function CardAboutMe({id}) {
    return (
        <CommonCard id={id}>
            <div className={'title'} style={{marginBottom: 70}}>
                <CardTitle title={'Sobre mim'} />
            </div>
            <CardContent>
                <img className={'user-image'} src={image} />
                <div className={'text-content'}>
                    <h2>
                        Ola,
                    </h2>
                    <p>
                      Me chamo Marcos Augusto Rodrigues.Sou um Desenvolvedor Web, Front-end,
                       entusiasta apaixonado por tecnologia, possuo um perfil resiliente e 
                      colaborativo, aberto a mudanças de cenários e equipes.
                    </p>
                   <div className={'aboutMe'}> 
                    
                        <div className={'NameAndLocation'}>

                            <p><span>Name: </span>Marcos Augusto Rodrigues</p>
                            <p><span> Birthday: </span> 7 julho, 1999</p>
        
                        </div>

                        <div className={'BirthdayAndEmail'}>

                            <p><span>Location: </span> Vila da Serra - Nova Lima</p>
                            <p><span>Email: </span> marcosagusto1041@gmail.com</p>

                        </div>

                    </div> 


                    <div>

                    <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">
                        <BigFilledButton
                            text={'Download CV'} 
                            icon={'cloud-download'}
                        />
                    </a>
                   

                    </div>

                </div>

            </CardContent>
        </CommonCard>
    )
}

const CardContent = styled.div`
    display: flex;
    flex-direction: row;
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
                line-height: 1.7;
            }


            
        .aboutMe {
            display: flex;

            .NameAndLocation { 
                padding: 0px 10px;
                display: block;
            

            
                     }

            .BirthdayAndEmail{
                padding: 0px 10px;       
                margin-left: 40px;

            }

             

                
            }
    }
    `