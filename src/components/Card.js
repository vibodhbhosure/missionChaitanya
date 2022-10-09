import React from "react";
import '../Card.css'
import cardimage from "../cardimgs/sas.jpeg"
import { Link } from "react-router-dom";
 


export default function Card(props) {
    return (
     <div>
     
     <div className="card cards" >
  <img className="card-img-top" id="cardimag" src={props.src} alt="cardimage"/>
  <div className="card-body">
    <h5 className="card-title title">{props.title}</h5>
    <p className="card-text desc">{props.desc}</p>
  </div>
  
  <div className="card-body">
 <Link to={props.link}> <button type="button" className="btn btn-info">View More</button></Link>
  </div>
</div>
     </div>
    
        
    )
}