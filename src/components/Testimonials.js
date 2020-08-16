import React, { Component } from "react";
import ClientReviews from "../API/ClientReviews";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      client: '',
      company: '',
    }
  }

  componentDidMount() {
    const reviews = ClientReviews.array.forEach(element => {
      //TODO add code to show reviews here
    });
  }
  render() {
    return (
      <div className="testimonials-wrapper">
        <div className="open-quote">“</div>
        <div className="testimonial-section">
          <div className="testimonial">
            <p>
              
            </p>
            <div className="author">Fulanito DeTal</div>
            <div className="company">Random LLC</div>
          </div>
        </div>
        <div className="closing-quote">”</div>
      </div>
    );
  }
  
}

export default Testimonials;
