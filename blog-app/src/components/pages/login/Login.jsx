import "./Login.css";

export default function Login() {
    return (
        <div className="login">
            <div className="loginLeft">
                <form className="loginForm">
                    <h2 className="loginTitle">Welcome Back!</h2>
                    <label>Email</label>
                    <input type="email" className="loginInput" placeholder="dummy@example.com" />
                    <label>Password</label>
                    <input type="password" className="loginInput" placeholder="*******" />
                    <button className="loginButton" type="submit">Login</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton" type="button">Register</button>
                </form>
            </div>
            <div className="loginRight">
                <i class="fa-solid fa-right-to-bracket"></i>
                <p className="loginDescription">
                    A community of writers and readers on our vibrant pink-themed blog. Share your voice, discover stories, and connect through words.
                </p>
            </div>
        </div>
    );
}
