import React from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Auth } from './components/Auth/Auth';
import { Main } from './components/Main/Main';
import { Registration } from './components/Registration/Registration';

function App() {
  const user = useSelector((state) => state.userInfo.login);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <Router>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Auth />} />
            <Route path={`/:id`} element={<Main />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;