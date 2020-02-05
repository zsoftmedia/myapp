import React from 'react'
import Radium, {StyleRoot} from 'radium'
import './Contact.scss'
const MainImage =()=>{
    const style ={
        '@media (max-width: 700px)':{
            position:'absalute',
            width:'100%',
            height:'220px',
            backgroundPosition:'center',
            backgroundSize:'cover'

        }
    }
    return(
        <StyleRoot>
        <div>   
            <div className="ContactColumnForImage" style={style}>
            </div>
        </div>  </StyleRoot>  
    )
}
export default Radium(MainImage);