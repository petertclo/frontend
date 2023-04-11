import React, { useEffect, useState } from "react";
import BigButton from "../components/BigButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import PhotoGallery from "../components/PhotoGallery";
import "../styles/RestaurantSuggestion.css"

const requiredLibraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[]= ["places"];

const RestaurantSuggestion: React.FC = () => {
  const cuisines = useSelector((state: RootState) => state.cuisine.cuisine);
  const [restaurants, setRestaurants] = useState<google.maps.places.PlaceResult[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY!,
    libraries: requiredLibraries,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error obtaining user location: ", error);
      }
    );
  }, []);


      useEffect(() => {
        if (isLoaded && !loadError && cuisines && location) {
          const map = new google.maps.Map(document.createElement("div"));
          const service = new google.maps.places.PlacesService(map);
          cuisines.forEach((cuisine: string) => {
            service.nearbySearch(
              {
                location,
                radius: 5000,
                type: "restaurant",
                keyword: cuisine,
              },
              (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                  if (results !== null) {
                    setRestaurants((prevRestaurants) => [
                      ...prevRestaurants,
                      ...results,
                    ]);
                  }
                }
              }
            );
          });
        } 

  }, [cuisines, location, isLoaded, loadError]);

  const Confirm = () => {
    console.log("Found the right restaurant! TODO: Save this to a database");
    //TODO: Save the choice to the database
  };
  const ShowNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  

  return (
    <div className="app-flexbox">
      <div className="app-content">
        <div className="app-title-box">
          <p>Does this sound good?</p>
        </div>
        <div className="restaurant-details">
          <p>Cuisine: {cuisines.join(", ")}</p>
          {restaurants.length === 0 && <p>No restaurant was found.</p>}
          {restaurants[currentIndex] && (
            <div>
            {restaurants[currentIndex]?.photos?.[0] && (
                <PhotoGallery photos={restaurants[currentIndex].photos || []} />
              )}
            <p>{restaurants[currentIndex].name}</p>
            <p>{restaurants[currentIndex].vicinity}</p>
            <p>Rating: {restaurants[currentIndex].rating}</p>
          </div>
          )}
        </div>
        <div className="app-buttons-box">
          <div className="app-button-box">
            <BigButton
              onClick={Confirm}
              backgroundColor="#ff8000"
              width="10rem"
              height="4rem"
            >
              That's great
            </BigButton>
          </div>
          <div className="app-button-box">
            <BigButton
              onClick={ShowNext}
              backgroundColor="#4caf50"
              width="10rem"
              height="4rem"
            >
              Show me another one
            </BigButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSuggestion;
