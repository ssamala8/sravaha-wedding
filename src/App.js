import React from "react";
import "./App.css";
import couple from "./assets/1J2A3673.JPG";
import video from "./assets/video.mp4";

function App() {
  const openMap = () => {
    window.open(
      "https://maps.google.com/?q=Sabari Function Hall Khammam",
      "_blank"
    );
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919573554954", "_blank");
  };

  return (
    <div className="container">

      {/* 🎬 VIDEO BACKGROUND */}
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={video} type="video/mp4" />
      </video>

      {/* 🌑 OVERLAY */}
      <div className="overlay"></div>

      {/* 💍 CARD */}
      <div className="card">

        <p className="top-text">Wedding Invitation</p>

        <p className="invite-line">
          With the blessings of our parents,
          we invite you to celebrate the wedding of
        </p>

        {/* IMAGE */}
        <div className="image-wrapper">
          <img src={couple} alt="couple" />
        </div>

        {/* NAMES */}
        <h1 className="names">Sravan Kumar</h1>
        <p className="and">&</p>
        <h1 className="names">Neha</h1>


        {/* DETAILS */}
        <p className="details">Friday, May 1, 2026</p>

        <p className="details">
          10:12 AM (Swathi Nakshatram, Midhuna Lagnam)
        </p>

        <p className="location">
          Sabari A/C Function Hall, Mustafanagar, Khammam
        </p>

        <p className="details">Lunch: 12:30 PM onwards</p>

        {/* BUTTONS */}
        <button onClick={openMap}>View Location</button>

        <button className="rsvp" onClick={openWhatsApp}>
          RSVP on WhatsApp
        </button>

        {/* FOOTER */}
        <p className="footer">
          We look forward to your gracious presence ❤️
        </p>

        
         <p className="family-heading">Invited by</p>
      <p className="family">
        Samala's Family & Chalamala's Family
      </p>

      </div>
    </div>
  );
}

export default App;