import React from "react";
import { platformInfo } from "../data/socialMedias"

const More = () => {

    return (
        <section className="more-blob">
            <div className="container">
                <h2><span>FOR MORE</span></h2>
                <div className="end-icons-wrapper">
                    {platformInfo.map(item => {
                        return (
                            <div key={item.linkName} className="icon-element">
                                <a title={item.title}
                                    tabIndex="0"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={item.link}>
                                    <i className={item.icon}></i>
                                    <span className="sr-only">{item.screenReader}</span>
                                </a>
                                <p>{item.subheading}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default More; 