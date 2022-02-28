import React, { useState } from "react";

function Card(props) {
  const [showmodal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showmodal);
    console.log("toggle modal handler")
  }
  return (
    <>
    <div className="box btn_shadow">
      <div className="img">
        <img src={props.image} alt="" onClick={toggleModal}></img>
      </div>
      <div className="category d_flex">
        <span onClick={toggleModal}>{props.category}</span>
        <label>
          <i className="fa fa-heart"></i>
          {props.likes}
        </label>
      </div>
      <div className="title">
        <h2 onClick={toggleModal} a>{props.title}</h2>
        <a href="#popup" className="arrow">
          <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    </div>
    { showmodal && 
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content d_flex">
          <div className="modal-img left">
            <img src={props.image} alt="" />
          </div>
          <div className="modal-text right">
            <span>Featured - Design</span>
            <h1>{props.title}</h1>
            <p>
              Lorem Ipsum has been the industry"s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.            </p>
            <div className="button f_flex mtop">
              <button className="btn_shadow">
                Like This <i className="far fa-thumbs-up"></i>
              </button>
              <button className="btn_shadow">
                View Project <i className="fa fa-chevron-right"></i>
              </button>
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i className="fa fa-times"></i>
              </button>
            
          </div>
        </div>
      </div>
    
  }
  </>
  );
}

export default Card;
