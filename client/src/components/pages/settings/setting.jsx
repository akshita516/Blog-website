import "./setting.css";
import Sidebar from "../../sidebar/Sidebar.jsx";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../../../../../client/src/context/Context.js";
import { UpdateSuccess } from "../../../../../client/src/context/Actions.js";

export default function Setting() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(`http://localhost:5000/images/${user.profilePicture}`);
    }
  }, [file, user.profilePicture]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = { userId: user._id };

    if (username !== user.username) updatedUser.username = username;
    if (email !== user.email) updatedUser.email = email;
    if (password) updatedUser.password = password;

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log("Image upload error:", err);
      }
    }

    try {
      await axios.put("/users/" + user._id, updatedUser);
      const refreshedUser = await axios.get("/users/" + user._id);
      dispatch(UpdateSuccess(refreshedUser.data));
      setSuccess(true);
    } catch (err) {
      console.log("Update error:", err);
    }
  };

  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              className="settingPPImage"
              src={
                preview ||
                "https://raw.githubusercontent.com/primer/octicons/main/icons/person-24.svg"
              }
              alt="Profile"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://raw.githubusercontent.com/primer/octicons/main/icons/person-24.svg";
              }}
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <label>Username</label>
          <input
            className="settingInput"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email</label>
          <input
            className="settingInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            className="settingInput"
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="writeSubmit" type="submit">
            Update
          </button>
        </form>

        {success && (
          <span style={{ color: "green" }}>Your profile has been updated</span>
        )}
      </div>
      <Sidebar />
    </div>
  );
}