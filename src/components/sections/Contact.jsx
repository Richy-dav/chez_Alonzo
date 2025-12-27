import React from "react";
import MapEmbed from "../sections/MapEmbed";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          Have a question, want to make a reservation, or need more information?
          Reach out to us and our team will be happy to assist you.
        </p>
        <p>
          <a href="tel:+237690000000">+237 690 00 00 00</a>
        </p>
        <p>
          <a href="mailto:contact@lumio.dev">contact@lumio.dev</a>
        </p>
        <p>
          <a
            href="https://www.google.com/maps?q=Douala+Cameroon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Douala, Cameroon
          </a>
        </p>

        <div className="contact-btn">
          <button className="btn" type="button">
            Book Now
          </button>
          <button className="btn1" type="button">
            Direction
          </button>
        </div>
      </div>
      <div className="contact-map">
        <MapEmbed />
      </div>
    </section>
  );
};

export default Contact;
