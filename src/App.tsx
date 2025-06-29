


import React, { FC } from 'react';
import './App.css';
import Home from './components/home/Home';
import {
  Routes,
  Route,
} from 'react-router-dom';
import 'antd/dist/reset.css';

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
