import { useState } from 'react';
import Background from './background.js';
import Box from './box.js';

const initialPosition = {
  x: 0,
  y: 0
};
//const shapePosition = {...initialPosition};
export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    setShape({
        ...shape,
        position: {
          x: shape.position.x + dx,
          y: shape.position.y + dy,
        }
      });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <h1>Game Catch Me If You Can!!!</h1>  
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}
