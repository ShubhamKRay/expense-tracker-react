import { useState } from "react";
import "../css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleLogin() {
    console.log(email);

    console.log(password);
  }

  return (
    <div className="login-container">
      <h1>My Expense Tracker</h1>
      <p>Login to your account</p>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />

      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}

export default Login;
