import React from 'react'
import Radium,{StyleRoot} from 'radium'
import "./About.scss"

const AboutMsg=(props)=>{
    const style = {
        '@media (max-width: 700px)':{
            width:'100%',
            margin:'3px auto'
        }
    }
    
    return( 
       <StyleRoot>  
   <>
        <div className="AboutMsgContainer">
            <div className="row">
                <div className="AboutMsgDetail" style={style}>
                   <h1>{props.Title} </h1>
                    <p>{props.Message}</p>
                </div>
                <div className="AboutMsgCompunent" style={style}>
                    <p>{props.Year}</p>
                    <p>{props.Place}</p>
                </div>               
            </div> 
            </div>
         </>
         </StyleRoot>
         )};
        
export default Radium(AboutMsg);