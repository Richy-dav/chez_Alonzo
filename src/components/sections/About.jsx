import React from "react";

const About = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <div className="card">
        <img src="https://i.pinimg.com/1200x/2c/48/ca/2c48ca4107d2b3a480a1cdc79527eba5.jpg" alt="/" />
        <h3>Concept Creation</h3>
        <p>
          Chez Alonzo was created with the vision of offering a welcoming space
          where people can relax, connect, and enjoy a stylish atmosphere after
          a long day.
        </p>
      </div>

      <div className="card">
        <img src="https://i.pinimg.com/736x/89/19/89/891989a9b204f80277baa44260f930a2.jpg" alt="/" />
        <h3>Main Idea & Location</h3>
        <p>
          Perfectly located and easy to access, Chez Alonzo is designed as a
          meeting point for those who appreciate good vibes and authentic
          moments.
        </p>
      </div>
    </section>
  );
};

export default About;