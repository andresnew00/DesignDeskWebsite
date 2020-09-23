import React from 'react'
import PortfolioItem from '../components/PortfolioItem'
import instagramimg from "../assets/InstagramFrame.png";
import instagramimg2 from "../assets/instagram-img2.jpg";

export default function PortfolioWebsites() {
    return (
        <div className="Websites-wrapper">
            {/* add new projects here by adding title, link and image to a new portfolioItem */}
            <PortfolioItem title="Sunshade Interiors" link={"https://sunshadeinteriors.com/"} image={instagramimg} />
            <PortfolioItem title="B&V Home Maintenance" link={"http://www.bandvhomemaintenance.com/"} image={instagramimg2} />
        </div>
    )
}
