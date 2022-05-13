import React from 'react';
import './App.css';
import ApplicationRouter from './ApplicationRouter';
import AuthenticationProvider from './context/AuthenticationProvider';

function App() {

  return (
    <>
        <AuthenticationProvider>
            <ApplicationRouter />
        </AuthenticationProvider>
    </>
  )
}

export default App
