import React from "react";
import Footer from "./Footer";
import CustomNavbar from "./Navbar";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
  };
  
  return (
    <div>
      <CustomNavbar />
      <div className="container my-5">
        <h2 className="mb-4 text-center">Contact Us for Business Deal with EcoBottle</h2>
        <form onSubmit={handleSubmit} className="mx-auto" style={{maxWidth: "500px"}}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">Company Name</label>
            <input type="text" className="form-control" id="company" placeholder="Enter your company name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Describe your business proposal" required></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
