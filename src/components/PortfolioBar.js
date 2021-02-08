import React from "react";
import instagramimg from "../assets/InstagramFrame.png";
import instagramimg2 from "../assets/instagram-img2.jpg";
import CrossfadeImage from "react-crossfade-image";
import { Link } from "react-router-dom";

const images = [instagramimg, instagramimg2];

export default class PortfolioBar extends React.Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.imageIndex === images.length - 1) {
        this.setState({ imageIndex: 0 });
      } else {
        this.setState({ imageIndex: this.state.imageIndex + 1 });
      }
    }, 4000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="barWrapper">
        <div className="width-wrapper">
          <div className="content">
            <div className="title">
              Check Out <b>Our Work!</b>
            </div>
            <div className="insideContent">
              <div className="leftSide">
                <CrossfadeImage
                  src={images[this.state.imageIndex]}
                  duration={2000}
                  timingFunction={"ease-out"}
                />
              </div>
              <div className="rightSide">
                <p>
                  We are determined to help all businesses develop websites to
                  get their image out in the online world. It is demonstrated
                  throughout our portfolio that we have helped lots of
                  businesses like yours, by creating anything from logos to
                  business cards, as well as developing a social media marketing
                  and SEO strategy to react to clients they would have never
                  reached otherwise.
                </p>
                <p>
                  Furthermore, having a team of professionals at your disposal
                  will allow you to attend to other areas of your business while
                  your online image grows and attract new clients. Feel free to
                  visit our portfolio of happy clients and their responsive
                  sites!
                </p>

                <Link to={`${process.env.PUBLIC_URL}/portfolio`}>
                  <button className="hvr-fade hvr-shadow">PORTFOLIO</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
