import React from "react";
import ContactUserCard from "./ContactUserCard";
import "./contact.css"


function Contacts(){
    return (
        <>
        
        <div className="contacts">

            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>

        </div>

        </>
    )
}

export default Contacts;