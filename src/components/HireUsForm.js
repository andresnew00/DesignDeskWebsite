import React from "react";
import { ReactComponent as MailIcon } from "../assets/mail-icon.svg";
import { ReactComponent as Triangle } from "../assets/orange-triangle.svg";

export default function HireUsForm() {
  return (
    <div className="form-wrapper">
      <div className="form-box">
        <div className="left-inside">
          <div className="icon-wrapper">
            <MailIcon />
          </div>
          <div className="under-icon">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              obcaecati quam assumenda maxime{" "}
            </p>
            <p>Shorter text in here</p>
          </div>
          <div className="triangle-separator">
            <Triangle />
          </div>
        </div>
        <div className="right-inside">
          <h1>Hire Us</h1>
          <h2>Message</h2>
          <textarea className="message-input" type="Message" />
          <div className="name-email">
            <div className="name">
              <h2>Your Name</h2>
              <textarea type="Name" />
            </div>
            <div className="email">
              <h2>Your Email</h2>
              <textarea type="email" />
            </div>
          </div>
          <div className="button-wrapper">
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
