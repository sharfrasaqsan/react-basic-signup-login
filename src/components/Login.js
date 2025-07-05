import { useNavigate } from "react-router-dom";
import request from "../api/request";

const Login = ({ onLogin, userName, setUserName, password, setPassword }) => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await request.get("/users", {
        params: {
          username: userName,
          password: password,
        },
      });

      if (response.data.length > 0) {
        alert("Login success!");
        onLogin();
        setUserName("");
        setPassword("");
        navigate("/");
      } else {
        alert("Invalid username or password");
      }
    } catch (err) {
      console.log(err);
      alert("Login Failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
