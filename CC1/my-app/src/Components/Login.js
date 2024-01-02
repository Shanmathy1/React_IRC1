import React from 'react';


const Login = () => {
  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
