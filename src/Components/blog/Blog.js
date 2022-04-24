import React from "react";
import blogdata from "./BlogData";
import "./Blog.css";
import "../Portfolio/Portfolio.css";
import Card from "./Card";
function Blog() {
  return (
    <section className="portfolio blog" id="blog" style={{marginTop:'50%'}}>
      <div className="container">
        <div className="heading text-center">
          <h4>Skills is Something that makes you stand apart</h4>
          <h1>MY Skills</h1>
        </div>
        <div className="content grid1 grid">
          {blogdata.map((val, index) => {
            return (
              <Card
                key={index}
                date={val.title_one}
                image={val.image}
                category={val.category}
                title_one={val.desc_one}
                desc_one={val.desc_one}
                title_two={val.title_two}
                desc_two={val.desc_two}
                title_three={val.title_three}
                desc_three={val.desc_three}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
