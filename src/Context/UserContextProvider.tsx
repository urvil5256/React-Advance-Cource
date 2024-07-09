import { FC, ReactNode, useState } from "react";
import UserContext from "./UserContext";

interface providerProps {
  children: ReactNode;
}
const UserContextProvider: FC<providerProps> = ({ children }) => {
  const [user, setUser] = useState({ userName: "", password: "" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
