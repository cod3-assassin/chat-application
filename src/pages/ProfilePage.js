import React from "react";
import UserProfile from "../components/Profile/ProfileHeader";
import ProfileSettings from "../components/Profile/ProfileSettings";
import ActivityFeed from "../components/Profile/ActivityFeed";

function ProfilePage({ user, activities, onUpdateProfile }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/3">
        <UserProfile user={user} />
        <ProfileSettings user={user} onUpdate={onUpdateProfile} />
      </div>
      <div className="md:w-2/3">
        <ActivityFeed activities={activities} />
      </div>
    </div>
  );
}

export default ProfilePage;
