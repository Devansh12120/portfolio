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
          <h4>VISIT MY BLOG AND GIVE YOUR FEEDBACK</h4>
          <h1>MY Blog</h1>
        </div>
        <div className="content grid">
          {blogdata.map((val, index) => {
            return (
              <Card
                key={index}
                date={val.date}
                image={val.image}
                category={val.category}
                title_one={val.title_one}
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
