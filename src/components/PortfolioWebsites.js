import React from 'react'
import PortfolioItem from '../components/PortfolioItem'
import instagramimg from "../assets/InstagramFrame.png";
import instagramimg2 from "../assets/instagram-img2.jpg";
import instagramimg3 from "../assets/doctortires.png";
import instagramimg4 from "../assets/Instagrampost-pdfsnake.png";

export default function PortfolioWebsites() {
    return (
        <div className="Websites-wrapper">
            {/* add new projects here by adding title, link and image to a new portfolioItem */}
            <PortfolioItem title="Sunshade Interiors" link={"https://blog.designdesk.tech/sunshade-interiors/"} image={instagramimg} />
            <PortfolioItem title="B&V Home Maintenance" link={""} image={instagramimg2} />
            <PortfolioItem title="Doctor Tires" link={"https://blog.designdesk.tech/doctor-tires/"} image={instagramimg3} />
            <PortfolioItem title="PDFSnake" link={"https://blog.designdesk.tech/pdfsnake/"} image={instagramimg4} />
        </div>
    )
}
