export default function ProcessQueue({baseState, queue}) {
    let finalState = baseState;

    for (let update of queue) {
      if (typeof update === 'function') {
        // Apply the updater function.
        finalState = update(finalState);
      } else {
        // Replace the next state.
        finalState = update;
      }
    }

    return (
        <>
        <h1>Processed State Queue Results</h1>
            <p style={{color:'green'}}>{finalState}</p>
        </>
    )
  }
