import React, { Component } from 'react'
import AboutMsg from './AboutMsg'
import OurSpeciality from './OurSpeciality'
import Radium,{StyleRoot} from 'radium'
import './About.scss';
class AboutUs extends Component{ 
  state={
    AbaboutMsgDetail:[
      {Title:"About Our Resturent",
      Message:"Bei Pizzeria Madonna können Sie sich verschiedenste Pizzen, als auch italienische Spezialitäten online bestellen & nach Hause liefern lassen und es in vertrauter Umgebung genießen. Kundenzufriedenheit ist dabei unser oberstes Ziel und daher bieten wir Ihnen eine umfangreiche Auswahl an qualitativ hochwertigen Speisen zu einem bestmöglichen Preis-Leistungs-Verhältnis.Unsere freundlichen und aufmerksamen Mitarbeiter beraten Sie gerne bei der Auswahl Ihrer Lieblingsgerichte aus unserer abwechslungsreichen SpeisekarteUnser geschulter Lieferservice sorgt dafür, dass Ihr Lieblingsgericht  rasch zu Ihnen kommt.",
      Place:"Wien",
      Year:"2020",
       key:"Title", 
      }
    ],
   
}
  render(){
 
  return(
    <StyleRoot>
  <div>
  <div className="AboutHeaderCard">
  <div className="AboutMainImage">
  <h1>Our Testy Pizza</h1>
  </div> 
  </div>
  {this.state.AbaboutMsgDetail.map((MsgDetail,i)=>{
    return <AboutMsg 
    Title={MsgDetail.Title}
    Message={MsgDetail.Message}
    Year={MsgDetail.Year}
    Place={MsgDetail.Place}
    key={10}
 />

  })}
   <div  className="AboutImageContainer">
     <h1>Why Our Customer Love Our Food.....?</h1>
      <div className="RowContainer">
     <OurSpeciality/>
   </div>
   </div>  
    </div>
    </StyleRoot>
  );
 
}}

export default Radium(AboutUs);
