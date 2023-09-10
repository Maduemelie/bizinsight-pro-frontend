import React, { useEffect, useState } from 'react';
import '../../style/Userprofile.css';

const UserProfile = ({ user }) => {
  const [base64Image, setBase64Image] = useState('');

  useEffect(() => {
    if (user.profilePicture && user.profilePicture.data) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result.split(',')[1]; // Extract the base64 part
        setBase64Image(
          `data:${user.profilePicture.contentType};base64,${base64Data}`
        );
      };
      reader.readAsDataURL(
        new Blob([new Uint8Array(user.profilePicture.data.data)])
      );
    }
  }, [user.profilePicture]);

  console.log('user.profilePicture:', user.profilePicture);

  // Log base64Image to check its contents
  console.log('base64Image:', base64Image);

  if (!user.profilePicture || !base64Image) {
    return (
      <div className="user-profile">
        <img src="" alt="Profile" className="profile-image" />
        <div className="user-info">
          <h3 className="username">{user.username}</h3>
          <p className="email">Email: {user.email}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <img src={base64Image} alt="Profile" className="profile-image" />
      <div className="user-info">
        <h3 className="username">{user.username}</h3>
        <p className="email">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
