import React from "react"
import Card from "./Card";
import ResumeData from "./ResumeData";
import './Resume.css'
function Resume() {
    return (
        <>
            <section className="Resume" id="resume">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>Freasher</h4>
                        <h1>My Resume</h1>
                    </div>
                    <div className="content-section mtop d_flex">
                        <div className="left">
                            <div className="heading">
                                <h4>2002-2018</h4>
                                <h1>Education Qualification</h1>
                            </div>
                            <div className="content">
                            {
                                ResumeData.map((val,id)=>{
                                    if(val.category==="Schooling"){
                                        return <Card key={id} image={val.image} desc={val.desc} grade={val.grade} title={val.title} year={val.year} />
                                    }
                                })
                            }
                                
                            </div>
                        </div>
                        <div className="left">
                            <div className="heading">
                                <h4>2018-2023</h4>
                                <h1>Graduation Qualification</h1>
                            </div>
                            <div className="content">
                            {
                                ResumeData.map((val,id)=>{
                                    if(val.category==="Graduation"){
                                        return <Card key={id} image={val.image} desc={val.desc} grade={val.grade} title={val.title} year={val.year} />
                                    }
                                })
                            }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume