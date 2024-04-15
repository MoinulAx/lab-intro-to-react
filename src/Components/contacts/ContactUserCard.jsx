import React from "react";
import "./contact.css"


function ContactUserCard(){
    return(
    
        <div className="contact__usercard">
            <img src="/src/profile.png" alt="" />
            <div className="contact__info">
               
                <h2>John Walke</h2>
                <h4 className="react-creator">React Creator</h4>
                <p className="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vel suscipit iste porro veritatis tenetur unde ipsum</p>

            </div>
        </div> 
        
    )
}

export default ContactUserCard;