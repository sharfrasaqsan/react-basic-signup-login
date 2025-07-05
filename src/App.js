import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onLogin = () => {
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <main>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home onLogout={onLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={
            <Login
              onLogin={onLogin}
              userName={userName}
              setUserName={setUserName}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              newUserName={newUserName}
              setNewUserName={setNewUserName}
              newPassword={newPassword}
              setNewPassword={setNewPassword}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
