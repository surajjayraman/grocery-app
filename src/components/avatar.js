import { getImageUrl } from './utils.js';

export default function Avatar({ person, size=100 }) {
  // request the closest image size based on the size prop.
  let thumbnailSize = 's';
  if (size > 90){
    thumbnailSize = 'b';
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(person,thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}