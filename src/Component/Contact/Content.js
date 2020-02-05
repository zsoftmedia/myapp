import React from 'react'
import ContactForm from './ContactForm'
import Radium, {StyleRoot} from 'radium'
import './Contact.scss'
const Content =(props)=>{
    const style ={
        '@media (max-width: 700px)' : {
            position:'absolute',
            top:'200px',
            width:'100%',  
            
        }

    }
    const styleFont ={
        '@media (max-width: 600px)':{
          
            width:'100%',  
            textAlign:'center'
            
        }

    }
    
    return(        
            <StyleRoot>
                    <>
                    <div className="ContactColumenForContent" style ={style}>
                        <h2>{props.Title}</h2>
                        <div className="TextContainer" >
                            <div className="PhoneAndAddress" style={styleFont}>
                                <p>{props.Address}</p>
                                <p>{props.Phone}</p>
                            </div>
                            <div className="EmailAndFex" style={styleFont}>
                                <p>{props.Email}</p>
                                <p>{props.Fex}</p>
                            </div>
                        </div>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.6602029302203!2d16.352438115145034!3d48.17462987922637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da8345498552d%3A0x1558a63fdf2ea98f!2sTriester%20Str.%2037%2C%201100%20Wien%2C%20Austria!5e0!3m2!1sen!2sro!4v1580402483532!5m2!1sen!2sro"
                            width="90%" 
                            height="150" 
                            frameborder="0"  
                            llowfullscreen=""
                            title ="address">
                        </iframe>  
                        <ContactForm/>           
                    </div>
                    </></StyleRoot>
    )
}
export default Radium(Content);