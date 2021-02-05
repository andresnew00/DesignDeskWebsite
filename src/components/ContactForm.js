import React from "react";
import { ReactComponent as GuysWCoffee } from "../assets/guys-coffee.svg";

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
  initialState = { name: "", email: "", message: "" };

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "hire-form", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
    this.setState(() => this.initialState);
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="Contact-wrapper">
        <div className="left-wrapper">
          <h2 className="title">Have any questions?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis congue
            odio diam eu cras augue elit.
          </p>
          <form id="hireform" onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="hire-form" />
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
              <button type="submit" className="hvr-shadow glow-on-hover">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="right-wrapper">
          <div className="coffee-guys">
            <GuysWCoffee />
          </div>
        </div>
      </div>
    );
  }
}
