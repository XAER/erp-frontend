import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthenticationProvider";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Dashboard from "../Dashboard/Dashboard";

const HomePage = () => {
  const { user } = React.useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isLoggedIn) {
      navigate("/auth/login");
    }
  }, [user, navigate]);

  return (
    <>
      <div>HOME</div>
    </>
  );
};

export default HomePage;
