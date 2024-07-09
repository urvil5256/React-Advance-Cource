import { useContext } from "react";
import UserContext from "../../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user.userName)
    return <div className="text-orange-500"> Please Login</div>;
  return <div className="text-orange-500">Welcome {user.userName}</div>;
}

export default Profile;
