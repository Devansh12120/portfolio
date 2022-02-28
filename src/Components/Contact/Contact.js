import React, {useState, useEffect} from "react";
import './Contact.css'
function Contact() {
    const [submit, isSubmit] = useState(false);        
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        subject:"",
        message:"",
    })
    const [error, setError] = useState({});
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData((preVal)=>{
            return{
                ...preVal,[name]:value,
            }
        })
    }
    const isValidMessage = (props)=>{
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!props.email) {
          errors.email = "E-mail is required";
      }
      else if (! regex.test(props.email)) {
          errors.email = "Wrong email format";
      }      
      if(!props.fullname){
          errors.fullname = "Name is required";
      }
      if (!props.phone){
        errors.phone = "Contact is required";
      }
      else if (props.phone.length!=10){
        errors.phone = "Contact is of 10 digits";
      }
      if (!props.subject){
        errors.subject = "Subject is required";
      }
      if (!props.message){
        errors.message = "Message is required";
      }
      return errors;
  }
  
  useEffect(()=>{
    if (Object.keys(error).length==0 && submit) {
      alert('Form submitted successfullly')
      setData({
        fullname:"",
        phone:"",
        email:"",
        subject:"",
        message:"",
      })
}
},[error]);
    const formSubmit = (e)=>{
        e.preventDefault();
        setError(isValidMessage(data));
        isSubmit(true);
    }
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Connect With Me</h1>
          </div>
          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                <div className="img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbJLApw691nzooARvVyNaKox655x5un0lqQ&usqp=CAU"
                    alt=""
                  ></img>
                </div>
                <div className="details">
                  <h1>Devansh Shah</h1>
                  <p>I am available for immediate joining as a freasher</p>
                  <p>Phone: +91-6283-581-193</p>
                  <p>Email: devanshshah476@gmail.com</p>
                  <br />
                  <span>CONNECT WITH ME ON</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <i className="fa fa-facebook-square"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fa fa-linkedin-square"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fa fa-github-square"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="box box_shadow">
                <form onSubmit={formSubmit}>
                    <div className="input row">
                      <span>YOUR NAME</span>
                      <input
                        type={"text"}
                        name={"fullname"}
                        value={data.fullname}
                        onChange={handleChange}
                      />
                    </div>
                    <p style={{color:"red",paddingTop:'0px',marginTop:'0px'}}>{error.fullname}</p>
                    <div className="input row">
                      <span>YOUR NUMBER</span>
                      <input
                        type={"phone"}
                        name={"phone"}
                        value={data.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <p style={{color:"red",paddingTop:'0px',marginTop:'0px'}}>{error.phone}</p>
                    <div className="input row">
                      <span>YOUR EMAIL</span>
                      <input
                        type={"email"}
                        name={"email"}
                        value={data.email}
                        onChange={handleChange}
                      />
                    </div>
                    <p style={{color:"red",paddingTop:'0px',marginTop:'0px'}}>{error.email}</p>
                    <div className="input row">
                      <span>SUBJECT</span>
                      <input
                        type={"text"}
                        name={"subject"}
                        value={data.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <p style={{color:"red",paddingTop:'0px',marginTop:'0px'}}>{error.subject}</p>
                    <div className="input row">
                      <span>MESSAGE</span>
                      <textarea
                        cols={"15"}
                        rows={"5"}
                        type={"text"}
                        name={"message"}
                        value={data.message}
                        onChange={handleChange}
                      />
                    </div>
                    <p style={{color:"red",paddingTop:'0px',marginTop:'0px'}}>{error.message}</p>
                    <button className="btn_shadow">SEND MESSAGE <i className="fa fa-long-arrow-down"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
