import React from "react";
import instagramimg from "../assets/InstagramFrame.png";
import instagramimg2 from "../assets/instagram-img2.jpg";
import CrossfadeImage from "react-crossfade-image";
import {Link} from "react-router-dom";

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
        <div className="content">
          <div className="title">Check Out <b>Our Work!</b></div>
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
                We are determined in helping small businesses create websites to
                get their image out in the online world. Feel free to visit our
                portfolio of happy clients and their responsive sites!
              </p>
              <p>
                We are determined in helping small businesses create websites to
                get their image out in the online world. Feel free to visit our
                portfolio of happy clients and their responsive sites!
              </p>

              <Link to={`${process.env.PUBLIC_URL}/portfolio`}>
                <button className="hvr-fade hvr-shadow">PORTFOLIO</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
