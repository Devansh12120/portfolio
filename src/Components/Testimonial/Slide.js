import React from 'react'
import TestData from './TestimonialData'

function Slide({valueIndex,id,image,name,design,offcer,post,date,desc,index}) {
    let position = "nextSlide"
    if (valueIndex === index) {
        position = "activeSlide"
    }
    if ((valueIndex === index-1) || (index === 0 && valueIndex === TestData.length-1)) {
        position = "lastSlide"
    }
    return (
        <article className={`d_flex ${position}`} key={id}>
            <div className='left box_shadow'>
                <div className='img'>
                    <img src={image} alt='' height={'200px'} width={'200px'}></img>
                </div>
                <div className='details mtop'>
                    <span>{design}</span>
                    <h2>{name}</h2>
                    <label>{offcer}</label>
                    <h1>{post}</h1>
                    <h3>{date}</h3>
                    <span>{desc}</span>
                </div>                
            </div>            
        </article>
    )
}

export default Slide