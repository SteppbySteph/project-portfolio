import React from "react";
import { currentSkills } from "../data/skills";

const ListofSkills = () => {

    const listOfSkills = currentSkills.map((item, index) => {
        return (
            <div>
                <h4 className="skills-subheading">{item.name}</h4>
                <div key={index}>
                    {item.skillList.map(item => (
                        <p>{item}</p>
                    ))}
                </div>
            </div>
        )
    })

    return (
        <div className="all-skills-group">
            {listOfSkills}
        </div>
    )
}

export default ListofSkills