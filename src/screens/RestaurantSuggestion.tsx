import { useLoadScript } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BigButton from "../components/BigButton";
import RestaurantDisplay from "../components/RestaurantDisplay";
import { RootState } from "../store/store";
import "../styles/RestaurantSuggestion.css";

const requiredLibraries: (
  | "places"
  | "drawing"
  | "geometry"
  | "localContext"
  | "visualization"
)[] = ["places"];

const RestaurantSuggestion: React.FC = () => {
  const cuisines = useSelector((state: RootState) => state.cuisine.cuisine);
  const [placeIds, setPlaceIds] = useState<string[]>([]);
  const [restaurants, setRestaurants] = useState<
    google.maps.places.PlaceResult[]
  >([]);
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
            radius: 1000,
            type: "restaurant",
            keyword: cuisine,
          },
          (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              if (results !== null) {
                setPlaceIds((prevPlaceIds) => [
                  ...prevPlaceIds,
                  ...results
                    .map((result) => result.place_id)
                    .filter(
                      (placeId): placeId is string => placeId !== undefined
                    ),
                ]);
              }
            }
          }
        );
      });
    }
  }, [cuisines, location, isLoaded, loadError]);

  useEffect(() => {
    if (isLoaded && !loadError && placeIds.length > 0) {
      const map = new google.maps.Map(document.createElement("div"));
      const service = new google.maps.places.PlacesService(map);
  
      const fetchedRestaurants: google.maps.places.PlaceResult[] = [];
  
      placeIds.forEach((placeId, index) => {
        service.getDetails(
          {
            placeId,
            fields: ["name", "vicinity", "rating", "photos", "place_id"],
          },
          (result, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              fetchedRestaurants.push(result as google.maps.places.PlaceResult);
            }
            if (index === placeIds.length - 1) {
              setRestaurants(fetchedRestaurants);
            }
          }
        );
      });
    }
  }, [placeIds, isLoaded, loadError]);

  const Confirm = () => {
    console.log("Found the right restaurant! TODO: Save this to a database");
    //TODO: Save the choice to the database
  };
  const ShowNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % restaurants.length);
  };

  return (
    <div className="app-flexbox">
      <div className="app-content">
        <div className="app-title-box">
          <p>Does this sound good?</p>
        </div>
        <div className="restaurant-details">
          {restaurants.length === 0 && <p>No restaurant was found.</p>}
          {restaurants[currentIndex] && (
            <RestaurantDisplay restaurant={restaurants[currentIndex]}></RestaurantDisplay>
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