import React, { useContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className="layout">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
};

export { Layout, RequireAuth };
