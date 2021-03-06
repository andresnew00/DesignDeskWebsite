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
          <h2 className="title">
            Have any <span>questions?</span>
          </h2>
          <p>
            If you have any questions or would like to get a quote please send
            us a message.
          </p>
          <form id="hireform" onSubmit={this.handleSubmit}>
            <div class="form__group field">
              <input type="hidden" name="form-name" value="hire-form" />
              <textarea
                required
                className="form__field"
                name="message"
                value={message}
                onChange={this.handleChange}
                placeholder="Message"
              />
              <label for="message" class="form__label">
                Message
              </label>
            </div>
            <div class="form__group field">
              <input
                required
                className="form__field"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Name"
              />
              <label for="name" class="form__label">
                Name
              </label>
            </div>
            <div class="form__group field">
              <input
                required
                className="form__field"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email"
              />
              <label for="email" class="form__label">
                Email
              </label>
            </div>
            <div className="button-wrapper">
              <button type="submit" className="hvr-shadow glow-on-hover">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="right-wrapper">
          <img src={require(`../assets/Conversation.png`)}/>
        </div>
      </div>
    );
  }
}
