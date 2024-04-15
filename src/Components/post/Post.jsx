import React from "react";

import PostCard from "./PostCard";

import "./post.css";

function post(){

    return (

        <div className="post">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />

        </div>
    )

}

export default post;