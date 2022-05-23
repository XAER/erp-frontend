import { Layout, Spin } from "antd";
import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import { LoadingContext } from "./context/LoadingProvider";
// Spinner icon from antdesign
import { LoadingOutlined } from "@ant-design/icons";
import { UserContext } from "./context/AuthenticationProvider";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import AppHeader from "./components/AppHeader";

const ApplicationRouter = () => {
  const { isLoading } = React.useContext(LoadingContext);

  const { login, user } = React.useContext(UserContext);

  let navigate = useNavigate();

  // Check if user is logged in
  // If not, redirect to login page
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      login(JSON.parse(user));
    } else {
      navigate("/auth/login");
    }
  }, []);

  return (
    <>
      <Layout>
        <Header style={{ background: "darkblue" }}>
          <AppHeader />
        </Header>
        {
          // * Loading Overlay stopping the user from interacting with the app
          isLoading ? (
            <div className="loading-overlay">
              <div className="loading-overlay__spinner">
                <Spin
                  indicator={
                    <div className="spinner_loading">
                      <LoadingOutlined spin />
                    </div>
                  }
                  size="large"
                />
              </div>
            </div>
          ) : null
        }
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth/login" element={<LoginPage />} />
          </Routes>
        </Content>
        <Footer>FOOTER</Footer>
      </Layout>
    </>
  );
};

export default ApplicationRouter;
