import React from "react"
import Card from "./Card"
import "./Portfolio.css"
import PortfolioData from "./PortfolioData"
function Portfolio() {
  return (
    <>
    <section className="portfolio top" id="portfolio">
    <div className="container">
    <div className="heading text-center">
        <h4>VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK</h4>
        <h1>MY PORTFOLIO</h1>
    </div>
    <div className="content grid">
    {
        PortfolioData.map((val,id)=>{
            return <Card key={id} image={val.image} category={val.category} title={val.title} likes={val.totallike}/>
        })
    }
        
    </div>

    </div>

    </section>

    </>
  )
}

export default Portfolio