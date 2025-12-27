import React from "react";

const Menu = () => {
  return (
    <section className="menu">
        <h2>MENU SECTION</h2>
      <div className="card">
        <img src="https://i.pinimg.com/1200x/6e/4c/c8/6e4cc8f2e4b9a4a7f726aa0be3362a0c.jpg" alt="/" />
        <h3>Foods</h3>
        <p>
          A refined selection of dishes designed to perfectly complement your
          drinks and enhance your moments of relaxation.
        </p>
      </div>

      <div className="card">
        <img src="https://i.pinimg.com/1200x/09/9a/85/099a85c20235321aebff6026a59b0d7a.jpg" alt="/"/>
        <h3>Drinks</h3>
        <p>
          Signature cocktails, classic beverages, and balanced flavors, prepared
          with care by our team.
        </p>
      </div>

      <div className="card">
        <img src="https://i.pinimg.com/736x/6e/91/fd/6e91fdcb7f23855f6d7252f8f6bc6122.jpg" alt="/" />
        <h3>Events</h3>
        <p>
          Themed nights, after-work gatherings, and special events in a warm and
          vibrant atmosphere.
        </p>
      </div>
    </section>
  );
};
export default Menu;
