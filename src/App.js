import React from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Auth } from './components/Auth/Auth';
import { Main } from './components/Main/Main';
import { Registration } from './components/Registration/Registration';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const user = useSelector((state) => state.userInfo.login);
  const dispatch = useDispatch();
  return (
      <div className='App'>
        <Router>
        <AuthProvider>
          <Header />
          <main className='main'>
            <Routes>
              <Route path='auth' element={<Auth />} />
              <Route
                path='main'
                element={
                  <ProtectedRoute>
                    <Main />
                  </ProtectedRoute>
                }
                />
              <Route path='registration' element={<Registration />} />
              <Route path='/' element={<Auth />} />
              <Route path='*' element={<Auth />} />
            </Routes>
          </main>
          <Footer />
          </AuthProvider>
        </Router>
      </div>
  );
};

export default App;