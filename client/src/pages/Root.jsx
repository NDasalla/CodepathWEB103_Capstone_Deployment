import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";

const Root = () => {
  // const { currentUser, logout } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   logout();
  //   navigate("/login");
  // };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
