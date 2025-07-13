import "./setting.css";
import Sidebar from "../../sidebar/Sidebar.jsx";

export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                            className="settingPPImage"
                            src="https://media.istockphoto.com/id/515228946/photo/flower.jpg?s=612x612&w=0&k=20&c=oUkBRs-zVtg0jXLEAvZA848SvM6GVQ51WZ3Nlwxge_Y="
                            alt="Profile"
                        />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <div className="settingFormGroup">
                        <label>UserName</label>
                        <input className="settingInput" type="text" placeholder="Enter your username" />
                        <label>Email</label>
                        <input className="settingInput" type="email" placeholder="Enter your email" />
                        <label>Password</label>
                        <input className="settingInput" type="password" placeholder="Enter your password" />
                        <button className="writeSubmit" type="submit">Update</button>
                    </div>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
