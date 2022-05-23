import React from "react";
import "./App.css";
import ApplicationRouter from "./ApplicationRouter";
import AuthenticationProvider from "./context/AuthenticationProvider";
import LoadingProvider from "./context/LoadingProvider";

function App() {
  return (
    <>
      <LoadingProvider>
        <AuthenticationProvider>
          <ApplicationRouter />
        </AuthenticationProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
