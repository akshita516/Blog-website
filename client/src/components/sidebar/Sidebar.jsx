import './sidebar.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

export default function Sidebar(){
    const [category,setCategory] =useState([]);
    useEffect(() => {
        const getCategories = async () => {
            const result = await axios.get("/categories");
            setCategory(result.data);
        };
        getCategories();
    }, []);
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <div className="sidebarItemTitle">ABOUT CREATOR</div>
                <img 
                    src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Sidebar" 
                    className="sidebarImg" 
                />
                <p className="sideBarContent">
                    
Hi! I'm Akshita, a Computer Science and Engineering student at the Institute of Aeronautical Engineering, Hyderabad. I'm passionate about building innovative tech solutions and exploring how technology can solve real-world problems.

My core strengths lie in programming with Python, Java, and C, and I enjoy working across both frontend and backend development. I’ve completed certifications from NPTEL in areas like Python and Artificial Intelligence, as well as a C# certification from Infosys Springboard.

Beyond coursework, I’ve pursued internships and projects in full-stack web development, deep learning, and AI-based applications, gaining hands-on experience in tools like TensorFlow, Flask, MongoDB, and more.

Through this blog website, I share my learnings, projects, and ideas as well as other tech aspirants— from tutorials to tech tips — with the goal of connecting, growing, and contributing to the tech community.

Let’s learn and build together!
                </p>
                </div>


            <div className="sidebarItem">
                <div className="sidebarItemTitle">CATEGORIES</div>
                <ul className="sidebarList">
                    {
                        category.map((cat) => (
                            <Link to = {`/?cat=${cat.name}`} className="link" key={cat.id}>
                                <li className="sidebarListItem" key={cat.id}>{cat.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>

            <div className="sidebarItem">
                <div className="sidebarItemTitle">FOLLOW US</div>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarIcon fa-brands fa-whatsapp-square"></i>
                </div>
            </div>
        </div>
    )
}