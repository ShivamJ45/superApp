import React from "react";
import "./RegistrationForm.css";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import CoverImg from "../../assets/image13.png"

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    tickBox: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    tickBox: null,
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    // console.log(event.target.value);
  };

  const navigate = useNavigate();

  const handleSignUp = () => {
    let isErrors = false;
    if (formValues.name.trim().length===0){
      setErrors((prev) => ({...prev,name:"Name is required"}));
      isErrors=true;
    }else{
      setErrors((prev) => ({...prev,name:null}));
    }
    if (formValues.username.trim().length===0){
      setErrors((prev) => ({...prev,username:"Username is required"}));
      isErrors=true;
    }else{
      setErrors((prev) => ({...prev,username:null}));
    }
    if (formValues.email.trim().length===0){
      setErrors((prev) => ({...prev,email:"Email is required"}));
      isErrors=true;
    }else{
      setErrors((prev) => ({...prev,email:null}));
    }
    if (formValues.mobile.trim().length===0){
      setErrors((prev) => ({...prev,mobile:"Mobile is required"}));
      isErrors=true;
    }else{
      setErrors((prev) => ({...prev,mobile:null}));
    }
    if (formValues.tickBox === false){
      setErrors((prev) => ({...prev,tickBox:"Please accept the terms and conditions"}));
      isErrors=true;
    }else{
      setErrors((prev) => ({...prev,tickBox:null}));
    }
    if (!isErrors){
      localStorage.setItem("userinfo",JSON.stringify(formValues));
      navigate("/category");
    }
  }

  return (
    <div className="mainDiv">
      <div className="leftDiv">
        <img src={CoverImg} alt="" className="coverImage" />
        <div className="tagLine">Discover new things on Superapp</div>
      </div>

      <div className="rightDiv">
        <h1 className="heading">Super app</h1>
        <p className="subheading">Create your new account</p>

        <div className="formDiv">
          <input
            className="valueInput"
            type="text"
            placeholder="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name ? <p className="errorMsg">{errors.name}</p> : <></>}
          <input
            className="valueInput"
            type="text"
            placeholder="UserName"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          {errors.name ? <p className="errorMsg">{errors.username}</p> : <></>}
          <input
            className="valueInput"
            type="email"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.name ? <p className="errorMsg">{errors.email}</p> : <></>}
          <input
            className="valueInput"
            type="text"
            placeholder="Mobile"
            name="mobile"
            value={formValues.mobile}
            onChange={handleChange}
          />
          {errors.name ? <p className="errorMsg">{errors.mobile}</p> : <></>}

          <div className="tickDiv">
            <input
              type="checkbox"
              name="tickBox"
              id="tickBox"
              value={formValues.tickBox}
              onChange={handleChange}
            />
            <label htmlFor="tickBox">
              Share my registration data with Superapp
            </label>
            
          </div>
          {errors.name ? <p className="errorMsg">{errors.tickBox}</p> : <></>}

          <button className="signUp" onClick={handleSignUp}>SIGN UP</button>
        </div>

        <div className="conditions">
          <p className="tnc">
            By clicking on Sign up. you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
          </p>
          <p className="pp">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
