import React from "react";
import { ReactComponent as ComputerGirls } from "../assets/computer-girls.svg";
import { Spring } from "react-spring/renderprops";

function WhyUs() {
  return (
    <div className="why-wrapper">
      <div className="rectangle-container">
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(props) => (
            <div className="top-white-rectangle">
              <h2 style={props}>
                Why Should You <span>Choose Us?</span>
              </h2>
              <p style={props}>
                At <b>Design Desk</b> we have a passion for designing and
                developing websites that are creative, easy to use, and
                personal. Our primary goal is to work closely with our clients
                to understand their needs and provide the best balance of user
                experience and creativity their projects can achieve, because
                your website should be able to show people what your business is
                all about. <br></br> <br></br>
                Your website should always tell your story, let us work closely
                with you to determine what the best strategy would be to reach
                new clients, and grow your business. We will work with you on
                every step of the process so you can understand the ins and outs
                of your project and to make sure the end product represents your
                business.<br></br>
                <br></br>
                We offer the best website design near the Lawrenceville area,
                and extend through Gwinnett County. We currently offer services
                as SEO, website design and development, logo design and much
                more. Contact us for more information and <b>FREE</b> estimates!
              </p>
              <div className="bottom-blue-rectangle"></div>
            </div>
          )}
        </Spring>
      </div>
      <div className="computer-girls-img">
        <ComputerGirls />
      </div>
    </div>
  );
}

export default WhyUs;
