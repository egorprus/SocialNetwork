import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthProvider } from './components/AuthProvider/AuthProvider';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { fetchAuthMe } from './redux/authStore';
import { PersonalPage } from './pages/PersonalPage/PersonalPage';
import { Main } from './pages/Main/Main';
import { Registration } from './pages/Registration/Registration';
import { Auth } from './pages/Auth/Auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, []);

  return (
      <div className='App'>
        <Router>
        <AuthProvider>
          <Header />
          <main className='main container'>
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
                <Route
                path=':login'
                element={
                  <ProtectedRoute>
                    <PersonalPage />
                  </ProtectedRoute>
                }
                />
              <Route path='registration' element={<Registration />} />
              <Route path='/' element={<Main />} />
              <Route path='*' element={<Main />} />
            </Routes>
          </main>
          <Footer />
          </AuthProvider>
        </Router>
      </div>
  );
};

export default App;