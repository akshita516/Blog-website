import './sidebar.css';

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <div className="sidebarItemTitle">ABOUT ME</div>
                <img 
                    src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Sidebar" 
                    className="sidebarImg" 
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptates officiis pariatur autem labore 
                    accusamus consequuntur iste, eos natus velit maiores modi ea rerum eligendi beatae dicta facilis totam 
                    cumque similique in dolorum facere? Dolorum ipsum quidem inventore aspernatur obcaecati esse voluptatibus 
                    deserunt perferendis non! Error hic harum doloribus dignissimos!
                </p>
                </div>


            <div className="sidebarItem">
                <div className="sidebarItemTitle">CATEGORIES</div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Movies</li>
                    <li className="sidebarListItem">Games</li>
                    <li className="sidebarListItem">Current Affairs</li>
                    <li className="sidebarListItem">Technology</li>
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