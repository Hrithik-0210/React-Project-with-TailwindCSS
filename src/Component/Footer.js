import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div
      id="footer"
      className="bg-orange-500  bottom-0 w-full h-8 flex justify-center items-center text- font-medium"
    >
      <h4>
        Site is developed by {user.name} - {user.email}
      </h4>
    </div>
  );
};
export default Footer;
