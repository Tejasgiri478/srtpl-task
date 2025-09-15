import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light footer">
      <div className="container py-4">
        <div className="row">
          <div className="col text-center">
            <ul className="list-inline mb-2">
              <li className="list-inline-item">
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/products"
                  className="text-light text-decoration-none"
                >
                  Product
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/about" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
            <p className="mb-1">
              &copy; {new Date().getFullYear()} Ecobottle. All rights reserved.
            </p>
            <p className="small mb-0">
              Follow us on
              <a
                href="https://twitter.com/"
                className="text-light ms-2 me-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bi bi-twitter-x"></span>
              </a>
              |
              <a
                href="https://facebook.com/"
                className="text-light ms-2 me-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bi bi-facebook"></span>
              </a>
              |
              <a
                href="https://instagram.com/"
                className="text-light ms-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bi bi-instagram"></span>
              </a>
            </p>
            <p className="small mt-2 mb-0">
              Designed & built with
              <span role="img" aria-label="love">
                ❤️
              </span>
              by the Ecobottle team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
