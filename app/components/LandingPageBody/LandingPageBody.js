import React from 'react';
import { Link } from 'react-router';

export default class LandingPageBody extends React.Component {
  render() {
    return (
      <div>
        <form role="form">
          <div className="form-group">
            <input type="text" className="form-control form-spacing text-center" name="user_login" required placeholder="User" />
            <input type="password" className="form-control form-spacing text-center" name="password_login" required placeholder="Password" />
              <Link to="/home"><button type="submit" className="btn btn-info form-spacing btn-style">Log In</button></Link>
            <Link to="/CreateAccountInfo/1"><button type="submit" className="btn btn-primary form-spacing btn-style">Create</button></Link>
          </div>
        </form>
        <div><p style={{textAlign: 'center'}}><u><em><a href="#">Forgot Password</a></em></u></p></div>
      </div>
    );
  }
}