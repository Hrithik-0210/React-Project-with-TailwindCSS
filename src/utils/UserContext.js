import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Mohan",
    email: "mohan@gmail.com",
  },
});
export default UserContext;
