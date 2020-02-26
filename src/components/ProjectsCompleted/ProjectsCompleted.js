import React from 'react'
import CommonCard from '../CommonCard/CommonCard'
import CardTitle from '../CardTitle/CardTitle'
import { ProjectsCompleted } from './styles'
import CardContect from '../Contect/Contect'

export default function CardSocialContect({id}){
  return(
    
      <CommonCard id={id}>
            <div className={'title'} style={{ marginBottom: 70 }}>
                <CardTitle title={'Contato'} />
            </div>
            <ProjectsCompleted>
            
            
            <CardContect
             text = { 'Phone'} 
             icon = { 'call'}
             GetInTouch = {'+55 31 9526-9606'}
            />
             
             <CardContect
             text = {'Email address'} 
             icon = { 'mail'}
             GetInTouch = {'marcosagusto1041@gmail.com'}
            />

             
          <CardContect
             text = { 'Location'} 
             icon = { 'location'}
             GetInTouch = {'Vila da Serra - Nova Lima'}
            />  

            </ProjectsCompleted>
      </CommonCard>
      
    

  )
}