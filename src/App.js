import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Posts from "./Components/Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./Function/function";
import {Routes,Route} from "react-router-dom"
import Search from "./Components/Search/Search";

const App = () => {

  const post = useSelector((state) => {
    return state.post
  });

  const dispatch = useDispatch()
  useEffect(() => {
    if(post.length === 0){
      getPosts(dispatch)
    }
  },[dispatch])

  const posts = useSelector((state) => {
    return state.post
  })
 
  return <div>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Posts posts={posts} data={"Please Wait Data To Load ..... "}/>} />
      <Route path="/search" element={<Search/>} />
    </Routes>
    
  </div>;
};

export default App;
