import React from 'react'
import Radium, {StyleRoot} from 'radium'
import './Contact.scss'

const ContactForm =(props)=>{
    const style ={
        '@media (max-width: 700px)':{
            width:'100%',
            margin:'0',
            padding:'0'
            
            
           
        }
    }
    return(
        <StyleRoot>
        <>
        <div className="ContactContainer">
            <form>
                <div className="row">
                    <div className="col-25">
                        <label>Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="#name" name="name" style={style}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Address</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="#name" name="name"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Wright Us</label>
                    </div>
                    <div className="col-75">
                        <textarea tyle="text" height ="150px"/> 
                    </div>
                </div>
                <div className="row">
                    <input type ="submit" value ="submit" style={style}/>
                </div>
            </form>
        </div>
        </>
        </StyleRoot>
    )
}
export default Radium(ContactForm);