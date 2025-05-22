import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountSettingsPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Get user data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      // If no user is logged in, redirect to sign in
      navigate('/signin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user'); // optional: clear user data
    navigate('/');
  };

  if (!user) return null; // Show nothing while loading

  return (
    <div className="account-container">
      <h2 className="account-title">Account Settings</h2>

      <div className="profile-section">
        <div className="profile-pic-wrapper">
          <img
            src={user.image || 'https://via.placeholder.com/100'}
            alt="Profile"
            className="profile-pic"
            style={{ width: 100, height: 100, borderRadius: '50%' }}
          />
        </div>
        <div className="profile-info">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>

      <p>
        Welcome back, {user.name}! Here's your account summary.
      </p>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AccountSettingsPage;
