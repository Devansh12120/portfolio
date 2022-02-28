import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
function Home() {
  return (
    <section className="hero" id="home">
      <div className="container f_flex top">
        <div className="left top">
          <h3>WELCOME TO MY DIGITAL RESUME</h3>
          <h1>
            HI I'm <span>Devansh Shah</span>
          </h1>
          <h2>
            I love{" "}
            <span>
              <Typewriter
                words={["to Code.", "building websites"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delsySpeed={1000}
              ></Typewriter>
            </span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>Find Me On</h4>
              <div className="display">
                <button className="btn_shadow">
                  <i className="fa fa-facebook"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fa fa-github"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fa fa-linkedin"></i>
                </button>
              </div>
            </div>
            <div className="col_1">
              <h4>Best Skill on</h4>
              <div className="display">
                <button className="btn_shadow">
                  <img src={require("../../assets/skiil1.jpg")} alt=""></img>
                </button>
                <button className="btn_shadow">
                  <img src={require("../../assets/skill2.jpg")} alt=""></img>
                </button>
                <button className="btn_shadow">
                  <img src={require("../../assets/skill3.jpg")} alt=""></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right_img">
            <img src={require("../../assets/profile.jpg")} alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
