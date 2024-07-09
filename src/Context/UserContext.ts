// First way to create a Context
import { createContext } from "react";

interface userDetails {
  userName: string;
  password: string;
}
export interface userContextType {
  user: userDetails;
  setUser: React.Dispatch<React.SetStateAction<userDetails>>;
}
const UserContext = createContext<userContextType>({
  user: { userName: "", password: "" },
  setUser: () => {},
});

export default UserContext;
