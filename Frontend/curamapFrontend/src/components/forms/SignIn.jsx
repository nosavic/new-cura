import React from "react";
import "../styles/form.css";

const SignIn = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Sign In</h2>
      <Form>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-input" />
        </div>

        <div className="form-group">
          <div className="form-checkbox">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="#" className="form-link">Forgot Password?</a>
        </div>

        <button type="submit" className="form-button">Sign in</button>
        <button type="button" className="form-button form-button-google">
          Sign in with Google
        </button>
      </Form>

      <div className="form-footer">
        <p>Don't Have an Account?</p>
        <a href="#" className="form-link">Sign Up</a>
      </div>
    </div>
  );
};

export default SignIn;