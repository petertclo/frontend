import { useState } from "react";
import "../styles/PhotoGallery.css";

interface PhotoGalleryProps {
  photos: google.maps.places.PlacePhoto[];
}


const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };
  
  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };
  
  if (photos.length === 0) {
    return <p>Sorry, no photos for this restaurant.</p>;
  } else
    return (
      <div className="photo-gallery">
        <div className="prev" onClick={prevPhoto}></div>
        <div className="photo-container">
          <img
            src={photos[currentPhotoIndex].getUrl()}
            alt="Restaurant"
            style={{ maxWidth: "20rem", maxHeight: "20rem" }}
          />
        </div>
        <div className="next" onClick={nextPhoto}></div>
      </div>
    );
};

export default PhotoGallery;
