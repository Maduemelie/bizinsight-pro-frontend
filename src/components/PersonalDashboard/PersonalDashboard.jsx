import React, { useState } from 'react';
import UserProfile from './UserProfile';
import '../../style/PersonalDashboard.css'

const PersonalDashboard = ({ userData }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    // You can implement the logic to upload the selectedFile to the server here.
    // You may need to use a library like axios to send the file to your backend.

    // After successful upload, you can update the user's profile picture in the userData state.
    // For example:
    // const response = await uploadProfilePicture(selectedFile);
    // if (response.status === 200) {
    //   const updatedUserData = { ...userData, profilePicture: response.data.profilePicture };
    //   setUserData(updatedUserData);
    // }

    // Reset the state
    setIsUploading(false);
    setSelectedFile(null);
  };

  return (
    <div className="personal-dashboard">
      <UserProfile user={userData} />
      {isUploading ? (
        <div className="file-upload-form">
          {/* Display the file upload form */}
          <input type="file" onChange={handleFileChange} />
          <button className="upload-button" onClick={handleUpload}>
            Upload
          </button>
        </div>
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
