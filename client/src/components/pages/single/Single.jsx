// src/components/pages/single/Single.jsx
import "./single.css";
import Sidebar from "../../sidebar/Sidebar";
import SinglePostComponent from "../../singlePostComponent/SinglePostComponent";

export default function Single() {
  return (
    <div className="single">        {/* ← your flex container */}
      <SinglePostComponent />       {/* ← child #1 */}
      <Sidebar />                   {/* ← child #2 */}
    </div>
  );
}