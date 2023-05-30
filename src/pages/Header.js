import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Lottie from "lottie-react";
import headerHello from "../lotties/headerHello.json"
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Lottie className="header-lottie" animationData={headerHello} loop={true} />
                <SocialMediaIcons />
                <img className="profile-img" src="./images/profile-img.jpeg" alt="author" />
                <div className="header-text-group">
                    <h5 className="portfolio">PORTFOLIO: </h5>
                    <h5 className="name">STEPHANNIE MEDENILLA</h5>
                    <h1>frontend<br />developer</h1>
                    <p>+ digital designer</p>
                </div>

            </div>
        </header>
    )
}

export default Header;


/*https://assets7.lottiefiles.com/packages/lf20_xYa95s.json*/