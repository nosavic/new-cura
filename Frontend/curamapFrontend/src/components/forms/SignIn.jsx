import React from "react";

const SignIn = () => {
  return (
    <div>
      <Form>
        <label htmlFor="email">
          <input type="email" />
        </label>
        <label htmlFor="password">
          <input type="password" />
        </label>
        <div>
          <input type="checkbox" />
          <a href="#">Forgot Password</a>
        </div>

        <button>Sign in</button>
        <button>Sign in with Google</button>
      </Form>

      <div>
        <p>Don't Have an Account ? </p>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
};

export default SignIn;
