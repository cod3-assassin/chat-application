import React from "react";

function ActivityFeed({ activities }) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Activity Feed</h2>
      <ul className="divide-y divide-gray-200">
        {activities.map((activity, index) => (
          <li key={index} className="py-2">
            <p className="text-gray-600">{activity.timestamp}</p>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed;
