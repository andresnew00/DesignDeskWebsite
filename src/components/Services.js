import React from "react";
import ServiceBox from "../components/ServiceBox";

export default function Services() {
  const WebsiteDesign = (
    <div>
      When your audience visits your website, it gives them their first
      impression of your business. They will judge your business within seconds.
      In these first few seconds, you want to make a positive impact on your
      audience. <br></br>
      <br></br> When we design websites we want to create more than a feeling,
      we unite functionality and beauty <b>(UI + UX Design)</b> to create a
      digital mark for your brand and website.
    </div>
  );
  const WebsiteRedesign = (
    <div>
      This is probably one of the last things you think about in your business.
      However, it’s important to understand and acknowledge the critical role
      your website plays in your customer acquisition efforts and the overall
      impact that it has on sales and revenue. Having an outdated website{" "}
      <b>can drive away clients</b>, especially if your website:{" "}
      <ul>
        <li>Your website no longer accurately reflects your brand.</li>
        <li>Your website is outdated compared to the new design trends.</li>
        <li>Your website isn’t responsive.</li>
        <li>Your website is not optimized for search engines.</li>
      </ul>
    </div>
  );
  const LogoDesign = (
    <div>
      A well-designed logo <b>builds trust and get’s people to stick around</b>.
      It tells potential clients who you are, what you do, and how that benefits
      them. It communicates to people with no prior knowledge or experience with
      your business that you do great work. <br></br>
      <br></br>
      Let us help you create a strong logo to stand out to consumers, ensure
      they remember your brand, and create positive associations with you.
    </div>
  );

  const SEO = (
    <div>
      Did you know The majority of search engine users <b>(more than 70%)</b>{" "}
      are more likely to click on one of the top 5 suggestions in the search
      engine results pages? Users trust search engines and having a presence in
      the top positions for the keywords the user is searching, increases the
      website’s trust.
      <br></br>
      <br></br>
      Moreover, having good SEO practices does not only improve your business
      traffic and chances to reach new customers but it will also enhance the
      user experience and usability of a website, allowing those new users to
      not only click through your site but also to stay.
    </div>
  );

  const SMM = (
    <div>
      Social media marketing consists of creating a social media profile for
      your business and starting networking with current and prospect clients in
      order to achieve more sales and keep your customers involved with any news
      or promotions your business has to offer. By applying a social media
      strategy, it will help you significantly increase your brand recognition.
      <br></br>
      <br></br>
      Having a dedicated team with the right skillset and sound knowledge on
      digital relationships would allow them to use their full potential in
      <b> creating and uploading the right content</b> (article, pictures,
      videos) for the current or prospective clients (audiences) that would have
      the most impact for your business.
    </div>
  );

  const Prints = (
    <div>
      A reason for business cards still in circulation is that they deliver
      contact information with ease.
      <br></br>
      <br></br>
      An attractive and well-thought-of business card design catches the eye and
      <b>builds a favorable impression of a business</b>. A company logo,
      tastefully displayed company details, use of the right brand colors and
      typeface surely give the card a professional look. It makes a brand
      recognizable for customers.
    </div>
  );
  return (
    <div className="Services-wrapper">
      <h2>
        Our <span>Services</span>
      </h2>
      <p className="main-p">
        These are some of the services we provide to achieve a professional
        website design process.
      </p>
      <div className="box-container">
        <ServiceBox
          name="websitedesign"
          title="Website Design"
          text={WebsiteDesign}
        />
        <ServiceBox
          name="logodesign"
          title="Website Redesign"
          text={WebsiteRedesign}
        />
        <ServiceBox name="seo" title="SEO" text={SEO} />
        <ServiceBox
          name="socialmedia"
          title="Social Media Management
"
          text={SMM}
        />
        <ServiceBox
          name="websitedevelopment"
          title="Logo Design"
          text={LogoDesign}
        />
        <ServiceBox name="prints" title="Design & Prints" text={Prints} />
      </div>
    </div>
  );
}
