// ProfileInfo.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Store/slices/userSlice";
import { FaCamera } from "react-icons/fa"; // Import the camera icon

function ProfileInfo({ user }) {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      // Assume there's a function to upload image to server and get the URL
      const imageURL = "https://example.com/uploaded-image.jpg";

      // Dispatch action to update user profile picture
      dispatch(updateUser({ profilePicture: imageURL }));
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg relative">
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
      <div className="flex flex-col items-center mb-4">
        <label htmlFor="profileImage" className="cursor-pointer">
          <div className="relative w-32 h-32">
            <img
              src={user.profilePicture || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full rounded-full mb-4"
            />
            <FaCamera className="text-blue-500 text-xl absolute bottom-0 right-0 m-2" />{" "}
            {/* Camera icon */}
          </div>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold mb-2">Name</h4>
        <p className="mb-2">{user.name}</p>
        <h4 className="text-lg font-semibold mb-2">Email</h4>
        <p className="mb-2">{user.email}</p>
        <h4 className="text-lg font-semibold mb-2">Bio</h4>
        <p className="mb-2">{user.bio}</p>
        <h4 className="text-lg font-semibold mb-2">Location</h4>
        <p className="mb-2">{user.location}</p>
        <h4 className="text-lg font-semibold mb-2">Joined</h4>
        <p className="mb-2">{user.joinedDate}</p>
      </div>
      <button
        onClick={handleImageUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Upload Image
      </button>
    </div>
  );
}

export default ProfileInfo;
