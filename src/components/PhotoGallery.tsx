import "../styles/PhotoGallery.css"

interface PhotoGalleryProps {
    photos: google.maps.places.PlacePhoto[]
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({photos}) => {
  if (photos.length === 0){
    return <p>Sorry, no photos for this restaurant.</p>;
  }
  else return (
    <img
      src={photos[0].getUrl()}
      alt="Restaurant"
      style={{ maxWidth: "20rem", maxHeight: "20rem"}}
      className="photo-gallery"
    />
  );
};

export default PhotoGallery;
