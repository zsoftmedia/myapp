import React from 'react'
import { Link } from 'react-router-dom'
const ManuOrder=(props)=>{
    return(
    
    <div className="App">
        <Link to ="/order" className="links"><div className="OrderFood">Order</div></Link>
        <Link to ="/manu" className="links"> <div className="MenuFood">Menu</div></Link>
        </div>
    )};
export default ManuOrder;