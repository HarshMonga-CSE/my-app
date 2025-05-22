import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate debitis, expedita officia corporis maxime reprehenderit similique culpa! Aperiam sequi culpa quidem sint, mollitia modi rem, atque itaque, suscipit quo placeat.</p>
      <div>
        <button
          onClick={() => navigate('/signup')}
          
        >
          Create Account
        </button>
        <br />
        <button
          onClick={() => navigate('/signin')}
        
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
