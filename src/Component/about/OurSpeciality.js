import React from 'react'
import Radium,{StyleRoot} from 'radium'
import "./About.scss"
const OurSpeciality=(props)=>{

    
       return(  
           <StyleRoot>
               <>
               <div className="BackgroundImageFixedPizza">
                  <p>Die beste, größte und günstigste Pizza in Wien</p>
               </div>
               <div className ="BodyText">
                   <h1>Our Pizza</h1>
                   <p>
                   Die beste, größte und günstigste Pizza in Wien. Und das schon seit dem 4.2.1990. 
                   Familie Al Omari gründete das Familienunternehmen in der Reindorfgasse 15. 
                   Aus einem kleinen Restaurant mit ehemals 4 Tischen wurde der Insidertip in Sachen
                    italienisches Essen. Schon 1991 wurde auf ca. 45 Sitzplätze vergrößert. Seitdem 
                    bedient Sie das freundliche Team in gemütlicher Atmosphäre. 
                   Um unnötige Wartezeiten zu vermeiden wird um telephonische Reservierung gebeten
                   </p>
               </div>
               <div className="BackgroundImageFixedVegi">
               <p>Frische Zutaten und Qualitätsprodukte</p>
               </div>
               <div className ="BodyText">
               <h1>NUR DAS BESTE</h1>
                   <p>
                   Die Verarbeitung von frischen Zutaten und Produkten mit höchster Qualität ist uns 
                   ein besonderes Anliegen. Das typische „Lawashbrot“, wird von uns selbst zubereitet 
                   und in einem speziellen Ofen gebacken. Es dient als Beilage zu einer Vielzahl von
                    Vor- und Hauptspeisen.
                   </p>
               </div>

              </> 
              </StyleRoot> 
        )};
        
export default Radium(OurSpeciality);