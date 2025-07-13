import './single.css'
import Sidebar from '../../sidebar/Sidebar.jsx'
import SinglePostComponent from '../../singlePostComponent/SinglePostComponent.jsx';
import TopBar from '../../topBar/TopBar.jsx';

export default function Single(){
    return (
        <div className="single">
            <SinglePostComponent />
            <Sidebar />
        </div>
    )
}