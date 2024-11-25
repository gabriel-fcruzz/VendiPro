// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PublicPage from "./components/public/PublicPage"; // Importando a nova página
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

import "./styles.css";
import "./responsivo.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página pública */}
          <Route
            path="/"
            element={<PublicPage isAuthenticated={isAuthenticated} />}
          />

          {/* Página de login */}
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />

          {/* Página privada (Dashboard) */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
