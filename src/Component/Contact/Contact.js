import React, { Component } from 'react'
import  './Contact.scss'
import Content from './Content'
import Radium,{StyleRoot} from 'radium'
import MainImage from './MainImage'

class Contact extends Component{ 
    
    state={
     
          Title:"Your Interest is Importent For Us",
          Address:"Triester Strasse,1100 Wien,Austria",
          ContantNumber:"+4367761991832",
          Email:"Office@mypizza.com",
          fex :"+4367761991832"  
    }
    
    render()
    {
        
        return(
           
            <> <StyleRoot>
                <div className="ContactImageContainer">
                    <div className="ContactRow">              
                   
                   <Content
                       Title = {this.state.Title}
                       Address = {this.state.Address}
                       Phone ={this.state.ContantNumber}
                       Email = {this.state.Email}
                       Fex = {this.state.fex}
                       />
                   


                    <MainImage/>
                </div>
                </div> </StyleRoot>
            </>
           
        )
    }
}

export default Radium(Contact);