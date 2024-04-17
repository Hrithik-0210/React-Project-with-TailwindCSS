import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="flex  w-auto  justify-center  items-center">
      <img
        src={logo}
        alt="logoImg"
        className="h-20 w-20 border-none rounded-full mx-4"
      />
      <h1 className="text-center text-2xl font-bold" key="heading">
        Food Villa
      </h1>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="flex w-auto items-center">
      <ul>
        <Link
          to="/"
          className=" p-3 m-3 transition ease-in-out delay-75 hover:scale-110 hover:border-b-2 hover:border-b-amber-600  duration-150 ... "
        >
          Home
        </Link>
        <Link
          to="/contact"
          className=" p-3 m-3 transition ease-in-out delay-75 hover:scale-110 hover:border-b-2 hover:border-b-amber-600  duration-150 ... "
        >
          Contact
        </Link>
        <Link
          to="/about"
          className=" p-3 m-3 transition ease-in-out delay-75 hover:scale-110 hover:border-b-2 hover:border-b-amber-600  duration-150 ... "
        >
          About
        </Link>
        <Link
          to="/cart"
          className="p-3 m-3 transition ease-in-out delay-75 hover:scale-110 hover:border-b-2 hover:border-b-amber-600  duration-150 ...  "
        >
          Cart
        </Link>
        <Link
          to="/instamart"
          className="p-3 m-3 transition ease-in-out delay-75 hover:scale-110 hover:border-b-2 hover:border-b-amber-600  duration-150 ... "
        >
          Instamart
        </Link>
      </ul>
    </div>
  );
};

const LoginLogout = () => {
  const [isLoggedin, setisLoggedIn] = useState(true);
  return (
    <div className="login-logout-container flex items-center mr-5  border border-black h-10 w-fit p-2 rounded-lg">
      {isLoggedin ? (
        <button className="logout-btn" onClick={() => setisLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <Link to={"/login"}>
          <button className="login-btn" onClick={() => setisLoggedIn(true)}>
            Login
          </button>
        </Link>
      )}
    </div>
  );
};
const Header = () => {
  return (
    <div className="flex  justify-between bg-slate-100 items-center m shadow-md fixed w-full z-50">
      <Title />
      <HeaderComponent />
      <LoginLogout />
    </div>
  );
};
export default Header;
