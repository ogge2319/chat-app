import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/useAuth";
import "./sidenav.css";

function SideNav() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!isLoggedIn) return null;

  return (
    <div className="sidenav">
      <button onClick={handleLogout}>Logga ut</button>
    </div>
  );
}

export default SideNav;
