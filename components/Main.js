import React from "react"
import Card from "./Card"
import data from "../data"


export default function Main(){
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return(
        <div className="body"> 
        <section className="cards-list">
                {cards}
            </section>
        </div> 
    )
}