import React from 'react';
import '../../style/Userprofile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img
        src="{user.profilePicture}"
        alt="Profile"
        className="profile-image"
      />
      <div className="user-info">
        <h3 className="username">{user.username}</h3>
        <p className="email">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
