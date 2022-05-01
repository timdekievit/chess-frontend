import './App.css';
import { Chessboard } from 'react-chessboard';
import Board from './Board';
import React from 'react';
import Homepage from '../../features/home/Home';
import { observer } from 'mobx-react-lite';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LoginForm from '../../features/home/users/LoginForm';
import RegisterForm from '../../features/home/users/RegisterForm';

function App() {
  return (
    <section className='container'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="chess" element={<Board />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Routes>
    </section>
  );
}

export default observer(App);
