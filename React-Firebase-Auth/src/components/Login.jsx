import React from "react";

const Login = (props) => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    hasAccount,
    handleLogin,
    handleSignup,
    passwordError,
    setHasAccount,
    emailError,
  } = props;
  return (
    <div>
      <section className="login">
        <div className="loginContainer">
          <form>
            <label>Email: </label>
            <input
              type="email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password: </label>
            <input
              type="password"
              autoFocus
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="true"
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
              {hasAccount ? (
                <>
                  <button type="button" onClick={handleLogin}>
                    Sign in
                  </button>
                  <p>
                    Don't have an account ?{" "}
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign up
                    </span>{" "}
                  </p>
                </>
              ) : (
                <>
                  <button type="button" onClick={handleSignup}>
                    Sign up
                  </button>
                  <p>
                    Have an account ?{" "}
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign in
                    </span>{" "}
                  </p>
                </>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
