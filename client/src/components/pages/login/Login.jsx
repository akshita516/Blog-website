import "./Login.css";
import { Link } from "react-router-dom";
import {useRef} from "react";
import axios from "axios";
import {useContext} from "react";
import {Context} from "../../../context/Context"

export default function Login() {

    const userRef = useRef();
    const passwordRef=useRef();
    const {user, dispatch, isFetching} = useContext(Context);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS" , payload:res.data});
        }catch(err){
            dispatch({type: "LOGIN_FAILURE"})
        }
    }

    console.log(user);

    return (
        <div className="login">
            <div className="loginLeft">
                <form className="loginForm" onSubmit = {handleSubmit}>
                    <h2 className="loginTitle">Welcome Back!</h2>
                    <label>UserName</label>
                    <input type="text" className="loginInput" placeholder="dummy@example.com" ref={userRef}/>
                    <label>Password</label>
                    <input type="password" className="loginInput" placeholder="*******" ref={passwordRef}/>
                    <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <Link to="/signup" className="loginLink">
                        <button type="button" className="loginButton">Register</button>
                    </Link>
                </form>
            </div>
            <div className="loginRight">
                <i className="fa-solid fa-right-to-bracket blogIcon"></i>
                <p className="loginDescription">
                    A community of writers and readers on our vibrant pink-themed blog. Share your voice, discover stories, and connect through words.
                </p>
            </div>
        </div>
    );
}
