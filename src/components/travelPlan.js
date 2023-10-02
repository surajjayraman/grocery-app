import { useState } from 'react';
import { initialTravelPlan } from './places.js';

function PlaceTree({ id, parentId, placesById, onComplete }) {
    const place = placesById[id];
    const childIds = place.childIds;
    return (
      <li>
        {place.title}
        <button onClick={() => {
          onComplete(parentId, id);
        }}>
          Complete
        </button>
        {childIds.length > 0 &&
          <ol>
            {childIds.map(childId => (
              <PlaceTree
                key={childId}
                id={childId}
                parentId={id}
                placesById={placesById}
                onComplete={onComplete}
              />
            ))}
          </ol>
        }
      </li>
    );
  }
  

export default function TravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan);
    const root = plan[0];
    const planetIds = root.childIds;
   
    function handleComplete(parentId, childId) {
        const parent = plan[parentId];
        // Create a new version of the parent place
        // that doesn't include this child ID.
        const nextParent = {
          ...parent,
          childIds: parent.childIds
            .filter(id => id !== childId)
        };
        // Update the root state object...
        setPlan({
          ...plan,
          // ...so that it has the updated parent.
          [parentId]: nextParent
        });
      }

  return (
    <>
      <h1 style={{color:'darkorchid'}}>My Travel Plans!!!</h1>
      <p style={{color:'darkgreen'}}>Places to visit</p>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}
