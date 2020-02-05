import React, { Component } from 'react';
import Person from '../manu/Person/Person'
import style from '../manu/manu.css'

class Menu extends Component{
    state={
        Person:[
            {Name:"zohaib",Age:"30"},
            {Name:"Bill",Age:"50"},
            {Name:"Khan",Age:"30"}
        ],
        showDetail :false
    }
    changeValue = (event)=>{
        this.setState({
            Person:[
                {Name:"zohaib",Age:"30"},
                {Name:"Bill",Age:"50"},
                {Name:event.target.value,Age:"30"}
            ],
        })
    }
  toggleButton =() =>{
      const notshow =this.state.showDetail
      this.setState({showDetail: !notshow})
  }
   
    
   render(){
      
       let detail =null;
       if (this.state.showDetail){
           detail = (
            <div>
            {this.state.Person.map((person,i) =>{
                return<Person name ={person.Name} 
                              age ={person.age}
                              key ={i}/>
            })}
                     </div> 
           )
           style.backgroundColor="red";

       }
       return(
           <>
           <button style ={style.button} onClick={this.toggleButton}>click me</button>
          {detail}
          
           </>

       )
   }
}
export default Menu;