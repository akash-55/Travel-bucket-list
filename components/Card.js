import React from "react"
import data from "../data"


export default function Card(props){
    return(
        <section className="card--container">
          <div className="img--container">
           <img src={props.imageUrl}/>
          </div>
          
          <div className="card--content">
               <div className="location">
                  <i class="fa-sharp fa-solid fa-location-dot fa-xs"></i>
                  <h4 className="location--name">{props.location}</h4>
                  <span><a className="maps-url" href={props.googleMapsUrl}> View on google maps</a></span>
                </div>
           <h1>{props.title}</h1>
           <p><b>Best season:</b>{props.season}</p>
           <p>{props.description}</p>
          </div>
        </section>
    )
}