import React, { useState } from 'react'
import { Customers } from './styles'
import VisibilitySensor from 'react-visibility-sensor'

export default function HappyCustomers({
  icon = 'Incone',
  number = 'number',
  text = 'text'

}){

  
  const [progress, setProgress] = useState(0)

  function onComponentAppearOnTheScreen(e) {
      if (e) {
          setTimeout(() => setProgress(number), 1000)
      }
  }
  return(

    <VisibilitySensor onChange={onComponentAppearOnTheScreen}>
    <Customers>
      <div className='container'>
          
          <div className='icon'>
           
        
          <ion-icon name={icon}></ion-icon>       

          </div>

  <span>{ progress }</span>

       
            <h1>{text}</h1>
       

      </div>

    </Customers>
    </VisibilitySensor>
  )
}