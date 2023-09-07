export default function StoryTray({ stories }) {
    // Copy the array
    const storiesToDisplay = stories.slice();
    // Does not affect the original array
    storiesToDisplay.push({
        id: 'new id',
        label: 'Create Story 3'
    })

    return (
      <ul>
        {storiesToDisplay.map(story => (
          <li className="panel" key={story.id}>
            {story.label}
          </li>
        ))}
      </ul>
    );
  }
