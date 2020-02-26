import React from 'react'
import { Contect } from './styles'

export default function CardContect({ 
  text = 'Insira um texto',
  icon = 'Insira um icon',
  GetInTouch = 'GetInTouch'
}){

  return(
    <Contect>

     <div className={'IconAndText'}> 

      <ion-icon name={icon}></ion-icon>  <h1>{text}</h1>

      </div>

      <div>
        <p>{GetInTouch}</p>
      </div>
   

    </Contect>
  )
}