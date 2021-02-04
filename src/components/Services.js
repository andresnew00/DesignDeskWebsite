import React from "react";
import ServiceBox from "../components/ServiceBox";

export default function Services() {
  return (
    <div className="Services-wrapper">
      <h2>
        Our <span>Services</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis congue
        odio diam eu cras augue elit.
      </p>
      <div className="box-container">
        <ServiceBox
          name="websitedesign"
          title="Website Design"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis congue odio diam eu cras augue."
        />
        <ServiceBox
          name="logodesign"
          title="Website Redesign"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis congue odio diam eu cras augue."
        />
        <ServiceBox
          name="seo"
          title="SEO"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis congue odio diam eu cras augue."
        />
        <ServiceBox
          name="socialmedia"
          title="Social Media Management
"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis congue odio diam eu cras augue."
        />
        <ServiceBox
          name="websitedevelopment"
          title="Logo Design"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis congue odio diam eu cras augue."
        />
        <ServiceBox
          name="prints"
          title="Design & Prints"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis congue odio diam eu cras augue."
        />
      </div>
    </div>
  );
}
