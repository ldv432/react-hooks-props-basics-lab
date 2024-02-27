import React from "react";
import user from "../data/user"

function Links() {
    return (
        <h3>Links
            {console.log(user.links.github)}
            <a href={user.links.github}>{user.links.github}</a>
            <a href={user.links.linkedin}>{user.links.linkedin}</a>
        </h3> 
    )
}

export default Links
