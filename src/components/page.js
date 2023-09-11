import SculptureGallery from './sculptureGallery';

export default function Page() {
  return (
    <div className="Page">
      <h1>Page - Multiple Component State Demo</h1>  
      <SculptureGallery />
      <SculptureGallery />
    </div>
  );
}

