import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function signIn(e) {
    e.preventDefault();
    if (username === "admin" && password === "1234") navigate("/");

    // auth
    //   .signInWithEmailAndPassword(username, password)
    //   .then((auth) => {
    //     navigate("/");
    //   })
    //   .catch((err) => alert(err.message));
  }

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none", color: "#f6cdbc" }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImg" sx={{ fontSize: 50 }} />
          <h2 className="login__logoTitle">یخدون</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>ورود </h1>
        <form onSubmit={signIn}>
          <label htmlFor="username">نام کاربری:</label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">رمز :</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit__btn">
            ورود
          </button>
        </form>

        <button className="signup__btn">ایجاد حساب کاربری</button>
      </div>
    </div>
  );
};

export default Login;
