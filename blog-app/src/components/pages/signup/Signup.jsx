import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup">
      <div className="signupLeft">
        <form className="signupForm">
          <h2 className="signupTitle">Create Your Account</h2>

          <label>User Name</label>
          <input type="text" className="signupInput" placeholder="example" />

          <label>Email</label>
          <input type="email" className="signupInput" placeholder="dummy@example.com" />

          <label>Password</label>
          <input type="password" className="signupInput" placeholder="*******" />

          <label>Confirm Password</label>
          <input type="password" className="signupInput" placeholder="*******" />

          <button className="signupButton" type="submit">Sign Up</button>
          <span className="signupForgot">Forgot Password?</span>
          <button className="signupRedirectButton" type="button">Login</button>
        </form>
      </div>

      <div className="signupRight">
        <i className="fa-solid fa-pen-nib blogIcon"></i>
        <p className="signupDescription">
          Join the community of writers and readers on our vibrant pink-themed blog.
          Share your voice, discover stories, and connect through words.
        </p>
      </div>
    </div>
  );
}
