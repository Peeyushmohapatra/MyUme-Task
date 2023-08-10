import React, { useEffect, useState } from "react";
import "./Posts.css";
import { useSelector } from "react-redux";

const Posts = ({posts,data}) => {

  return (
    <div className="posts_container">
      {posts.length !== 0 ? (
        posts.map((item) => {
          return (
            <div key={item.id} className="post">
              <h5>{item.body}</h5>
            </div>
          );
        })
      ) : (
        <h1>{data}</h1>
      )}
    </div>
  );
};

export default Posts;
