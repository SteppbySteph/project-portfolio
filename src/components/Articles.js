import React from "react";
import { mediumArticles } from "../data/writings";

const Articles = () => {

    const listOfArticles = mediumArticles.map(item => {
        return (
            <article key={item.title} className="article-project">
                <div className="project-img-container">
                    <img src={item.photo} alt={item.description} className="project-img" />
                </div>
                <div className="project-text-group">
                    <h4 className="project-heading">{item.projectHeading}</h4>
                    <div>
                        <a href={item.articleLink} tabIndex="0">
                            <p className="my-thoughts-first-paragraph">{item.title}</p>
                            <p className="article-text">{item.text}
                                <span className="bold-highlight">&nbsp;&gt;&gt;</span>
                            </p>
                        </a>
                    </div>
                </div>
            </article>
        )
    })

    return (
        <div className="thoughts-desktop">
            {listOfArticles}
        </div>
    )
}

export default Articles