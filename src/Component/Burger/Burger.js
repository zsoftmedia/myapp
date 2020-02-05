import React from 'react'
import './Buger.css'
import BurgerIngredients from './BurgerIngredient/Burgerigredients'
const burger =(props)=>{
    const convertIngredients =Object.keys(props.ingredients)
    .map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i)=>{

           return <BurgerIngredients key ={igkey+i} type ={igkey}/>;
        });
    });
    return(
        <div className ="Burger">
            <BurgerIngredients type="bread-top">hi</BurgerIngredients>
           {convertIngredients}
            <BurgerIngredients type="bread-bottom"/>

        </div>
    )
}
export default burger;