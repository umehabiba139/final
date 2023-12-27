import React from 'react';

function LaunchCard({ launch }) {
  return (
    <div className="launch-card">
      {/* Display launch information */}
      <h3>{launch.mission_name}</h3>
      {/* Other details */}
    </div>
  );
}

export default LaunchCard;
