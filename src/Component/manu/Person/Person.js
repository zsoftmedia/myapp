import React from 'react'

const Person =(props)=>{
return(
    <div className="App">
        <p>This is {props.name} my i am {props.age} year old</p>
         <input className="inpute" type="text" onChange = {props.changed}></input>
    </div>
)
}
export default Person;