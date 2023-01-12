
import './login.scss'

import { ReactComponent as Logo } from '../../assets/logos/logo-short-predicto.svg'

const LoginPage = () => {
  return (
    <>
      <div className="session">
        <div className="left">
          <Logo />
        </div>
        <form action="" className="log-in">
          <h4>
            We are <span>PREDICTO</span>
          </h4>
          <p>Welcome back! Log in to your account to view today's clients:</p>
          <div className="floating-label">
            <input placeholder="Email" type="email" name="email" id="email" />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="floating-label">
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
            <label htmlFor="password">Password:</label>
          </div>
          <button type="submit" /* onClick="return false;" */>Log in</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
