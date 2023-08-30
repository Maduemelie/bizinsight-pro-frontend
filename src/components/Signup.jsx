import React from 'react';
import '../style/Signup.css';


const SignUp = () => {
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" name='Username' id='Username' />
        <input type="text" placeholder="Email" name='Email' id='Email'/>
        <input type="text" placeholder="Phone" name='Phone' id='Phone' />
        <input type="password" placeholder="Password"  name='Password' id='Password' />
        <input type='password' placeholder='Confirm Password'name='ConfirmPassword' id='ConfirmPassword' />
        <button type="submit">Sign Up</button>
      </form>
      <p className="signup-text">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}
// const SignUp = () => {
//   return (
//     <div className="signup-page">
//       <h2>Sign Up</h2>
//       <form>
//         <input type="text" placeholder="Username" />
//         <input type="text" placeholder="Email" />
//         <input type="text" placeholder="Phone" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

export default SignUp;
