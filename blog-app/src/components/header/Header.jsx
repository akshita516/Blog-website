import "./header.css";

export default function Header(){
    return(
        <>
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitleSm">React & Node</span>
                    <span className="headerTitleLg">Blog</span>
                </div>
                <img className="headerImg" src="https://media.istockphoto.com/id/515228946/photo/flower.jpg?s=612x612&w=0&k=20&c=oUkBRs-zVtg0jXLEAvZA848SvM6GVQ51WZ3Nlwxge_Y=" alt="Header"/>
            </div>
        </>
    )
}