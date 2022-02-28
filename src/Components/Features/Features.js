import React from 'react'
import Card from './Card'
import './Features.css'
import data from './FeaturesData'
function Features() {
  return (
    <section className="features top" id='features'>
    <div className="container">
      <div className="heading">
        <h1>What I Do</h1>
      </div>
      <div className="content grid">
      {
        data.map((val,index)=>{
          return <Card key={index} image={val.image} title={val.title} description={val.desc} />
        })
      }
      </div>
    </div>
  </section>
  )
}

export default Features