import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, setMissions } from './missions/missionsSlice'; // Import your actions

function ExampleComponent() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const loading = useSelector((state) => state.missions.loading);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    
    dispatch(fetchMissions()); 
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading missions...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {missions.map((mission) => (
          <li key={mission.id}>{mission.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleComponent;
