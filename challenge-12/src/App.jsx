import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth, login, logout } from './context/authContext';
import "./App.css";

const PublicPage = () => (
  <div className="card">
    <h1>Página Pública</h1>
    <p>Accessible para todos, no necesita estar logueado</p>
  </div>
);

const PrivatePage = () => {
  const { state } = useAuth();
  return (
    <div className="card">
      <h1>Página Privada	</h1>
      <p>Bienvenido {state.username}!</p>
    </div>
  );
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleLogin = () => {
    if (username.trim() !== '') {
      const lastVisitedPage = localStorage.getItem('lastVisitedPage') || '/';
      dispatch(login(username, lastVisitedPage));
      navigate(lastVisitedPage);
    } else {
      alert('Ingrese un nombre de usuario por favor.');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className='input-login'
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};

const LogoutPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Logout</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { state } = useAuth();

  return (
    <nav>
      <Link to="/">Inicio</Link>
        {state.isAuthenticated ? (
          <>
            <Link to="/logout">Logout</Link>
            <span>Bienvenido {state.username}</span>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
    </nav>
  );
};

const PrivateRoute = ({ children }) => {
  const { state } = useAuth();
  if (!state.isAuthenticated) {
    return <div className="container"><h1>Por favor has el login para ver esta página.</h1></div>;
  }
  return children;
};

const App = () => {
  const { state } = useAuth();

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (state.isAuthenticated) {
        localStorage.setItem('lastVisitedPage', window.location.pathname);
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [state.isAuthenticated]);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<h1>Página de Inicio</h1>} />
          <Route path="/public" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <PrivatePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);