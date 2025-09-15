import React from "react";
import CustomNavbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

const About = () => (
  <div>
    <CustomNavbar />
    <div
      className="container-fluid py-4"
      style={{ background: "#f1faee", minHeight: "100vh" }}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="p-4 rounded shadow-sm bg-white">
            <h1 className="mb-3" style={{ color: "#1b4332" }}>
              About EcoBottle
            </h1>
            <p className="fs-5" style={{ color: "#333" }}>
              EcoBottle is dedicated to reducing plastic waste by providing
              sustainable, reusable water bottles made from eco-friendly
              materials. Our mission is to inspire individuals and communities
              to make environmentally conscious choices, one bottle at a time.
            </p>
            <h2 className="mt-4" style={{ color: "#40916c" }}>
              Our Vision
            </h2>
            <p>
              We envision a world where single-use plastics are a thing of the
              past. By choosing EcoBottle, you join a movement towards a
              cleaner, greener planet.
            </p>
            <h2 className="mt-4" style={{ color: "#40916c" }}>
              Why Choose Us?
            </h2>
            <ul>
              <li>High-quality, durable, and stylish bottles</li>
              <li>Made from BPA-free and recycled materials</li>
              <li>Committed to sustainability and social responsibility</li>
              <li>Every purchase supports environmental initiatives</li>
            </ul>
            <p className="mt-4">
              Thank you for supporting EcoBottle and making a positive impact on
              our environment!
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
