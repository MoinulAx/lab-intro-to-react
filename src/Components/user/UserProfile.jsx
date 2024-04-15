import React from "react";
import "./user.css"


function UserProfile(){

    return (
        <div className="profile">
           <img src="/src/profile.png" alt="" />
            <div className="contact__info">
                <h2>John Walke</h2>
                <h4 className="react-creator">React Creator</h4>
                <p className="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vel suscipit iste porro veritatis tenetur unde ipsum</p>
            </div>

        </div>
    )

}



export default UserProfile;