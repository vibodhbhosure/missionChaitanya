import React from "react";
import Card from './Card'
import '../ConflictAndConfusion.css'
export default function ConflictAndConfusion() {
  return (
    <div id="bgimgconflictandconfusion">
      <div id="conflictandconfusion">
      <div id="conflictandconfusiontitle" >Conflict and Confusion</div>
      <div className="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      </div> 
      </div>
</div>
  );
}