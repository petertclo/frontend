import PhotoGallery from "./PhotoGallery";

interface RestaurantDisplayProps {
    restaurant: google.maps.places.PlaceResult;
}

const RestaurantDisplay: React.FC<RestaurantDisplayProps> = ({restaurant}) => {
  const mapsUrl = `https://www.google.com/maps/place/?q=place_id:${restaurant.place_id}`;
  return (
    <div>
      <div className="restaurant-details">
        {!restaurant && <p>No restaurant was found.</p>}
        {restaurant && (
          <div>
            <div className="photo-gallery">
              {<PhotoGallery photos={restaurant.photos || []} />}
            </div>

            <div>
              <p>{restaurant.name}</p>
              <p>{restaurant.vicinity}</p>
              <p>Rating: {restaurant.rating}</p>
              <p>
                <a href={mapsUrl} target="_blank" rel="noreferrer">
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantDisplay;
