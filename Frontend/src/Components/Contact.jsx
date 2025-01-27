import React from 'react';
import './Contact.css'
import { useState } from 'react';


export default function App() {
  const [result,setResult]=useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f94240dd-6690-4d67-8c33-787d90e2161b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (


    
    <>
    <section className='pg'>
        <h1>Contact me</h1>
      </section>
 <section className="contact">
  <form onSubmit={onSubmit}>
    <h1 className='discuss'>Let's Discuss Project</h1>

    <div className="inputbox">
      <label>Full Name</label>
      <input type="text" className="field" placeholder='Enter your name' name='name ' required/>

    </div>

    <div className="inputbox">
      <label>Email</label>
      <input type="Email" className="field" placeholder='Enter your Email' name = 'email' required/>


    </div>

    <div className="inputbox">
      <label>Message</label>
      <textarea name="message"  className="fieldmess" placeholder='Enter your Message'></textarea>
    </div>

    <button type='submit'>Send Message</button>

  </form>
 </section>
    </>
  );
}