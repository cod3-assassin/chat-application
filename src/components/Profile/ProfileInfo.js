import React from "react";

function ProfileInfo({ user }) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Profile Information</h2>
      <p className="mb-2">
        <span className="font-semibold">Name:</span> {user.name}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Bio:</span> {user.bio}
      </p>
    </div>
  );
}

export default ProfileInfo;
