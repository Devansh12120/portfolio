import React from "react";

function Card(props) {
  return (
    <div className="box btn_shadow">
      <img src={props.image} alt="" height={'60px'} width={'60px'}></img>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href="#">
        <i className="fa fa-arrow-right"></i>
      </a>
    </div>
  );
}

export default Card;
