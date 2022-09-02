import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import socket from 'socket.io-client';
import Home from './pages/Home';
import Test from './pages/Test';
import Users from './pages/Users';
import Messages from './pages/Messages';
import Login from './pages/Login';
import Register from './pages/Register';

console.log(process.env);

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/messages/:friendId" element={<Messages />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
