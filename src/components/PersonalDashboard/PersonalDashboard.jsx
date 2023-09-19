import React, { useState } from 'react';
import UserProfile from './UserProfile';
import axios from 'axios'; // Import axios for HTTP requests
import '../../style/PersonalDashboard.css';

const PersonalDashboard = ({ userData, setUserData, isLoggedIn }) => {
  // console.log(userData)
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      try {
        const formData = new FormData();
        formData.append('profilePicture', selectedFile);
        formData.append('userData', JSON.stringify(userData));

        const response = await axios.post(
          'http://localhost:3500/api/v1/upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        if (response.status === 200) {
          const updatedUserData = {
            ...userData,
            profilePicture: {
              data: response.data.user.profilePicture.data,
              contentType: response.data.user.profilePicture.contentType,
            },
          };
          setUserData(updatedUserData);

          // Reset the state
          setIsUploading(false);
          setSelectedFile(null);
        }
      } catch (error) {
        console.error('Error uploading profile picture:', error);
      }
    }
  };


  return (
    <div className="personal-dashboard" encType="multipart/form-data">
      <UserProfile user={userData} />
      {isUploading ? (
        <form className="file-upload-form">
          {/* Display the file upload form */}
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
          />
          <button className="upload-button" onClick={handleUpload}>
            Upload
          </button>
        </form>
      ) : (
        <button
          className="upload-profile-button"
          onClick={() => setIsUploading(true)}
        >
          Upload Profile Picture
        </button>
      )}
    </div>
  );
};

export default PersonalDashboard;
