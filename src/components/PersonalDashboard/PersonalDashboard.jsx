import React, { useState } from 'react';
import UserProfile from './UserProfile';
import RevenueData from './RevenueData';
import axios from 'axios'; // Import axios for HTTP requests
import '../../style/PersonalDashboard.css';

const PersonalDashboard = ({ userData, setUserData, isLoggedIn }) => {
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

          setIsUploading(false);
          setSelectedFile(null);
        }
      } catch (error) {
        console.error('Error uploading profile picture:', error);
      }
    }
  };

  const renderUploadForm = () => {
    return (
      <form className="file-upload-form">
        <input
          type="file"
          name="profilePicture"
          onChange={handleFileChange}
        />
        <button className="upload-button" onClick={handleUpload}>
          Upload
        </button>
      </form>
    );
  };

  return (
    <div className="personal-dashboard" encType="multipart/form-data">
      {userData.profilePicture ? (
        <UserProfile user={userData} />
      ) : isUploading ? (
        renderUploadForm()
      ) : (
        <div>
          <UserProfile user={userData} />
          <button
            className="upload-profile-button"
            onClick={() => setIsUploading(true)}
          >
            Upload Profile Picture
          </button>
        </div>
      )}
      <RevenueData  />
    </div>
  );
};

export default PersonalDashboard;
