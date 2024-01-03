import './Signup.css';

const Signup = () => {
  return (
    <div className='signup-container'>
      <div className='signup-card'>
        <h2>Sign Up</h2>
        <button className="sign-in-button google">Sign Up with Google</button>
        <button className="sign-in-button github">Sign Up with GitHub</button>
      </div>
    </div>
  );
}

export default Signup;
