import "../css/Login.css";

function Login() {
  return (
    <div className="login-container">
      <h1>My Expense Tracker</h1>
      <p>Login to your account</p>

      <input type="email" placeholder="Enter Email" />

      <br />
      <br />

      <input type="password" placeholder="Enter Password" />
      <br />
      <br />

      <button>Sign In</button>
    </div>
  );
}

export default Login;
