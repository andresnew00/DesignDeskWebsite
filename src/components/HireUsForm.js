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
              If you have any questions or would like to get a quote please send
              us a message.{" "}
            </p>
            <p>We need your email to reach you back</p>
          </div>
          <div className="triangle-separator">
            <Triangle />
          </div>
        </div>
        <div className="right-inside">
          <form action="POST" data-netlify="true">
            <h1>Hire Us</h1>
            <h2>Message</h2>
            <textarea className="message-input" type="message" />
            <div className="name-email">
              <div className="name">
                <h2>Your Name</h2>
                <input className="input-nameemail" type="name" />
              </div>
              <div className="email">
                <h2>Your Email</h2>
                <input className="input-nameemail" type="email" />
              </div>
            </div>
            <div className="fieldCaptcha">
              <div data-netlify-recaptcha="true"></div>
            </div>
            <div className="button-wrapper">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
