import { useNavigate } from "react-router-dom";
import request from "../api/request";

const Signup = ({
  newUserName,
  setNewUserName,
  newPassword,
  setNewPassword,
}) => {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await request.post("/users", {
        username: newUserName,
        password: newPassword,
      });

      if (response.data) {
        alert("Signup successfully.");
        setNewUserName("");
        setNewPassword("");
        navigate("/login");
      } else {
        alert("Please use valid informations.");
      }
    } catch (err) {
      console.log(err);
      alert("Signup failed.");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <label>Username: </label>
      <input
        type="text"
        placeholder="Username"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        required
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <p>* Password must be upto 6 characters.</p>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
