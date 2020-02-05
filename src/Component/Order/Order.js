import React from 'react'
import Aux from '../../Container/hoc/Aux'
import BurgerLayout from './BurgerLayout'
import BurgerBulder from '../../Container/BurgerBulder/BurgerBulder'

const Order=(props)=>{
    return(
<Aux>
  
        <BurgerLayout>
            <BurgerBulder/>
        </BurgerLayout>
        
        

        </Aux>
       
   
    )};
export default Order;