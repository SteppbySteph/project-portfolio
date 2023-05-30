import React from "react";
import Articles from "../components/Articles";

const Thoughts = () => {
    return (
        <section className="articles-blob">
            <div className="container">
                <h2><span>MY THOUGHTS<span className="thoughts-hidden">ABOUT CODE</span></span></h2>
                <Articles />
            </div>
        </section>
    )
}

export default Thoughts; 