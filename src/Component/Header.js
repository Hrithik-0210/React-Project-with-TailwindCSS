import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="flex  w-auto  justify-center  items-center my-2">
      <img
        src={logo}
        alt="logoImg"
        className="h-14 w-14 border-none rounded-full mx-3"
      />
      <h1 className="text-center text-2xl font-bold text-white" key="heading">
        Food Villa
      </h1>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="flex w-auto items-center">
      <ul className="text-white">
        <Link
          to="/"
          className=" p-3 m-3 transition ease-in-out delay-75 hover:scale-110 hover:border-b-2 hover:border-b-white  duration-150 ... "
        >
          Home
        </Link>
        <Link
          to="/contact"
          className=" p-3 m-3 transition ease-in-out delay-75 hover:scale-110 hover:border-b-2 hover:border-b-white  duration-150 ... "
        >
          Contact
        </Link>
        <Link
          to="/about"
          className=" p-3 m-3 transition ease-in-out delay-75 hover:scale-110 hover:border-b-2 hover:border-b-white  duration-150 ... "
        >
          About
        </Link>
        <Link
          to="/cart"
          className="p-3 m-3 transition ease-in-out delay-75 hover:scale-110 hover:border-b-2 hover:border-b-white  duration-150 ...  "
        >
          Cart
        </Link>
        <Link
          to="/instamart"
          className="p-3 m-3 transition ease-in-out delay-75 hover:scale-110 hover:border-b-2 hover:border-b-white  duration-150 ... "
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
    <div className="login-logout-container flex items-center mr-5  border border-white text-white text-sm font-medium h-10 w-fit  px-3 rounded-lg transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-300 ...">
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
    <div className="flex  justify-between bg-orange-500 items-center m shadow-md sticky top-0 w-full z-50">
      <Title />
      <HeaderComponent />
      <LoginLogout />
    </div>
  );
};
export default Header;
