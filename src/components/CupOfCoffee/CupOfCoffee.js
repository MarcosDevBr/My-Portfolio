import React from 'react'
import { ContainerProjects } from './styles'
import HappyCustomers from '../HappyCustomers/HappyCustomers'

export default function ExtraCard(){
  return(

   
    <ContainerProjects>
  
      <HappyCustomers
        icon = {'rocket'}
        number = {'157'}
        text = {'Projects completed'}
      />

      <HappyCustomers
        icon = {'cafe'}
        number = {'2765'}
        text = {'Cup of coffee completed'}
      />

      <HappyCustomers
        icon = {'happy'}
        number = {'350'}
        text = {'Happy customers'}
      />

      <HappyCustomers
        icon = {'trophy'}
        number = {'29'}
        text = {' Awards won '}
      />

    </ContainerProjects> 

   

  )
} 