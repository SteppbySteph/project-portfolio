import React from "react";
import { platformInfo } from "../data/socialMedias";

const SocialMediaIcons = () => {

    const socialmedias = platformInfo.map(item => {
        return (
            <a key={item.linkName}
                title={item.title}
                tabIndex="0"
                target="_blank"
                rel="noreferrer"
                href={item.link}>
                <i className={item.icon}></i>
                <span className="sr-only">{item.screenReader}</span>
            </a>
        )
    })

    return (
        <div className="header-icons">
            {socialmedias}
        </div>
    )
}

export default SocialMediaIcons
