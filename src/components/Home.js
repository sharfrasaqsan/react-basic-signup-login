import { useNavigate } from "react-router-dom";

const Home = ({ onLogout }) => {
  const navigate = useNavigate();

  const logout = () => {
    onLogout();
    alert("Logout successfully.");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h1>Welcome to the App</h1>
      <p>You are successfully loggedin!</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
