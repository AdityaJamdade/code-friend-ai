import { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [activeTab, setActiveTab] = useState('signup');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <div className='auth-tabs'>
          <button
            className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => handleTabChange('signup')}
          >
            Sign Up
          </button>
          <button
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => handleTabChange('login')}
          >
            Login
          </button>
        </div>
        {activeTab === 'signup' && (
          <div className='auth-content'>
            <button className="auth-button google">Sign Up with Google</button>
            <button className="auth-button github">Sign Up with GitHub</button>
          </div>
        )}
        {activeTab === 'login' && (
          <div className='auth-content'>
            <button className="auth-button google">Login with Google</button>
            <button className="auth-button github">Login with GitHub</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
