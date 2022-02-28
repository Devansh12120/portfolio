import React, { useState } from "react";
import "./Header.css";
function Header() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  const [mobile, setMobile] = useState(false);
  return (
    <><header className="header">
          <div className=" container d_flex">
              <div className="logo">
                  <img src={require("../../assets/profilephoto.jpg")} alt="" height={'75px'} width={'70px'} style={{borderRadius:'50%'}}></img>
              </div>
              <div className="navlink">
                  {/* <ul className="link f_flex"> */}
                  <ul
                      className={mobile ? "nav-links-mobile" : "link f_flex uppercase"}
                      onClick={() => setMobile(false)}
                  >
                      <li>
                          <a href="#home">home</a>
                      </li>
                      <li>
                          <a href="#features">features</a>
                      </li>
                      <li>
                          <a href="#portfolio">portfolio</a>
                      </li>
                      <li>
                      <a href="cv.pdf" download={"Devansh resume"}>resume
                        </a>
                      </li>
                      <li>
                          <a href="#clients">Projects</a>
                      </li>
                      <li>
                          <a href="#blog">blog</a>
                      </li>
                      <li>
                          <a href="#contact">contact</a>
                      </li>
                  </ul>
                  <button className="toggle" onClick={() => setMobile(!mobile)}>
                      {mobile ? (
                          <i className="fa fa-times close home-btn"></i>
                      ) : (
                          <i className="fa fa-bars open"></i>
                      )}
                  </button>
              </div>
          </div>
      </header><section className="demo"></section></>
  );
}

export default Header;
