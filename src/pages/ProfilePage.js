// ProfilePage.js
import React from "react";
import { useSelector } from "react-redux";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileInfo from "../components/Profile/ProfileInfo";
import ActivityFeed from "../components/Profile/ActivityFeed";

function ProfilePage({ activities }) {
  const user = useSelector((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileHeader userName={user.name} />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/3">
            <div className="bg-white p-6 shadow rounded-lg">
              <ProfileInfo user={user} />
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="bg-white p-6 shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Activity Feed</h2>
              <ActivityFeed activities={activities} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
