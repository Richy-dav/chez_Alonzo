import React from "react";

const MapEmbed = () => {
  return (
    <div style={{ width: "100%", height: "300px"}} className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.849735552379!2d9.765293774078478!3d4.0510563959227035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d003e28308d%3A0x51e717820f6a5006!2sChina%20Mall%20pk13!5e0!3m2!1sen!2scm!4v1766833157872!5m2!1sen!2scm"
        style={{ border: 0, width: "100%", height: "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
export default MapEmbed;
