import React, { Component } from 'react'
import Aux from '../hoc/div'
import Burger from '../../Component/Burger/Burger'

class BurgerBulder extends Component{
    state ={
        ingredients :{
            Salad:1,
            Cheese:2,
            Bacon:1,
            Meat:2
        }
    }
    render()
    {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>buger controller</div>
            </Aux>
        )
    }
}
export default BurgerBulder;