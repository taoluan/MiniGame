import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
function App() {
  console.log(process.env.REACT_APP_SOCKET_ENDPOINT)
  useEffect(() => {
    const socket = io('http://localhost:8080');
    socket.on("FromAPI", data => {
      console.log(data)
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {process.env.REACT_APP_API_ENDPOINT}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.ENDPOINT}
        </a>
      </header>
    </div>
  );
}

export default App;
