import loginImg from "../assets/img/login.jpg";
import loginAvtar from "../assets/img/login-avatar.png";
import lockImg from "../assets/img/lock-img.png";
import googleAuthImg from "../assets/img/google-auth.png";
import fbAuthImg from "../assets/img/facebook-auth.png";
import twitterAuthImg from "../assets/img/twitter-auth.png";

const LoginPage = () => {
  return (
    <div className="body-container">
      <div className="form-container">
        <div className="form-left-box">
          <img src={loginImg} alt="avatarImg" className="login-avatar-img" />
        </div>
        <div className="form-right-box">
          <div className="signUp-div">
            <span>New User? </span>
            <a href="#SignUp"> Sign Up</a>
          </div>
          <div className="welcome-div">
            <h2>Welcome Back!</h2>
            <p>Login to continue</p>
          </div>
          <div className="email-input-section">
            <img src={loginAvtar} alt="login-avatar" className="login-avatar" />
            <input type="email" placeholder="Enter your Email id" />
          </div>
          <div className="password-section">
            <img src={lockImg} alt="lock_img" className="lock-Img" />
            <input type="password" placeholder="Enter Passoword" />
          </div>
          <div className="login-forgetPass-section">
            <a href="#LoggedIn" className="login-page-login-btn">
              <h2>LOGIN</h2>
            </a>
            <a href="#Forget_pass" className="forget-pswd">
              FORGET PASSWORD?
            </a>
          </div>
          <div className="auth-login-section">
            <p>Login with</p>
            <img
              src={googleAuthImg}
              alt="google-auth"
              className="google-auth-img"
            />
            <img
              src={fbAuthImg}
              alt="facebook-auth"
              className="facebook-auth-img"
            />
            <img src={twitterAuthImg} alt="twitter-auth" className="twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
