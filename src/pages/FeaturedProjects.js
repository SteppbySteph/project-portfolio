import React from "react";
// import Lottie from "lottie-react";
// import featuredProjects from "../lotties/featuredProjects.json"
import { featProjects } from "../data/featuredProjects";

const FeaturedProjects = () => {
    return (
        <section>
            {/* <div class="container">
                
                <Lottie className="feat-lottie" animationData={featuredProjects} loop={true} />
                <p className="maintenance"><i>under maintenance</i></p>
            </div> */}
            <div className="container">
                <h2><span>FEATURED PROJECTS</span></h2>
                <div className="article-desktop">
                    {featProjects.map(project => {
                        return (
                            <article class="article-project">
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <div class="project-img-group">
                                        <img src={project.source} alt="project-illustration" class="project-img" />
                                        <div class="overlay">
                                            <h2 class="project-img-text-overlay">{project.name}</h2>
                                        </div>
                                    </div>
                                    <div class="project-text-group">
                                        <h4 class="project-heading">{project.description}</h4>
                                        <p>{project.subDescription}</p>
                                        <div class="project-tags-container">
                                            {project.tags.map(tag => <p class="project-tags">{tag}</p>)}

                                        </div>
                                    </div>
                                </a>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects; 