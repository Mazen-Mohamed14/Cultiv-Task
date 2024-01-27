export const Login = () => {
  return (
    <div className="login-background">
      <div className="login-form shadow-lg">
        <div className="mt-4">
          <label>Email:</label>
          <input
            placeholder="example@email.com"
            name="email"
            type="email"
          ></input>
          <label>Password:</label>
          <input name="password" type="password"></input>
        </div>
        <button className="sign-btn mt-5">Sign In</button>
      </div>
    </div>
  );
};
