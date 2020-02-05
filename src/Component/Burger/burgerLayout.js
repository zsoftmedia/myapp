import React from 'react';
import Aux from '../../Container/hoc/div'
import './order.css'
const BurgerLayout = (props) =>{
return(
    <Aux>
        <div>hello</div>
        <main className="Content">{props.children}</main>
    </Aux>
)}
export default BurgerLayout;