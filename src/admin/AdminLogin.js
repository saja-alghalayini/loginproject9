import React, {useState} from 'react';
import './adminlogin.css';

function AdminLogin() {
    const [email, setEmail]=useState('');
    const [emailError, setEmailErorr]=useState('');
    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');
    const [successMsg, setsuccessMsg]=useState('');


    return(
        <div className="login-wrapper">
        <h1>Admin Log In</h1>
        <form className='form-group form'>
          <label> Email </label>
            <input type="text" className='form-control' placeholder='Your Email' 
            // onChange={handleEmailChange} value={email}
            />
          
          <label>Password </label>
            <input type="password" />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
    
}
export default AdminLogin;