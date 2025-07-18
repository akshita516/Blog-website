import "./home.css";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import Posts from "../../posts/Posts.jsx";
import axios from "axios";
import {useState,useEffect} from "react";
import {useLocation} from "react-router-dom";


export default function Home(){

    const [posts,setPosts]=useState([]);
    const location = useLocation().search;
    
useEffect(() => {
  const fetchPosts = async () => {
    try {
      const res = await axios.get(`/posts${location}`);
      setPosts(res.data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    }
  };
  fetchPosts();
}, [location]);

    return(
        <>
            <Header />
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar />
            </div>
        </>
    )
}