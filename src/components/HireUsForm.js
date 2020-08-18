import React from "react";
import { ReactComponent as Triangle } from "../assets/orange-triangle.svg";
import { ReactComponent as MailIcon } from "../assets/mail-icon.svg";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class HireUsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */
  initialState = { name: "", email: "", message: "" }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "hire-form", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
    this.setState(() => this.initialState)
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="form-wrapper">
        <div className="form-box">
          <div className="left-inside">
            <div className="icon-wrapper">
              <MailIcon />
            </div>
            <div className="under-icon">
              <p>
                If you have any questions or would like to get a quote please
                send us a message.{" "}
              </p>
              <p>We need your email to reach you back</p>
            </div>
            <div className="triangle-separator">
              <Triangle />
            </div>
          </div>
          <div className="right-inside">
            <form id="hireform" onSubmit={this.handleSubmit}>
              <input type="hidden" name="form-name" value="hire-form" />
              <h1>Hire Us</h1>
              <h2>Message</h2>
              <textarea
                required
                className="message-input"
                name="message"
                value={message}
                onChange={this.handleChange}
              />
              <div className="name-email">
                <div className="name">
                  <h2>Your Name</h2>
                  <input
                    required
                    className="input-nameemail"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="email">
                  <h2>Your Email</h2>
                  <input
                    required
                    className="input-nameemail"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
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
}
