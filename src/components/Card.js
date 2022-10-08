import React from "react";
import '../Card.css'
import cardimage from "../cardimgs/sas.jpeg"
 


export default function Card() {
    return (
     <div>
     
     <div className="card cards" >
  <img className="card-img-top" src={cardimage} alt="cardimage"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  
  <div className="card-body">
  <button type="button" className="btn btn-info">View More</button>
  </div>
</div>
     </div>
    
        
    )
}