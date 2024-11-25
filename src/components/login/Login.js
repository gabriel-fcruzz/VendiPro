import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook para navegação

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = () => {
    if (email === "GGG@admin.com" && password === "1234") {
      onLogin(); // Marca o usuário como autenticado
      setErrorMessage("");
      navigate("/dashboard"); // Redireciona para o Dashboard
    } else {
      setErrorMessage("Email ou senha incorretos.");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.loginTitle}>Faça Login para acessar à página.</h2>
      <input
        style={styles.loginInput}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.loginInput}
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
      <button style={styles.loginButton} onClick={handleLogin}>
        Login
      </button>
      <button style={styles.returnButton} onClick={handleBack}>
        Voltar
      </button>
    </div>
  );
};

const styles = {
  loginContainer: {
    padding: "20px",
    margin: "20px auto",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    maxWidth: "400px",
    textAlign: "center",
  },
  loginTitle: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  loginInput: {
    padding: "10px",
    marginBottom: "10px",
    width: "100%",
    borderColor: "#ccc",
    borderWidth: "1px",
    borderRadius: "5px",
  },
  errorMessage: {
    color: "red",
    margin: "10px 0",
  },
  loginButton: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
  returnButton: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "grey",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
};

export default Login;
