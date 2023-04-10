import React from "react";
import BigButton from "../components/BigButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const RestaurantSuggestion: React.FC = () => {
  const cuisine = useSelector((state: RootState) => state.cuisine.cuisine);

  const Confirm = () => {
    console.log("Found the right restaurant! TODO: Save this to a database");
    //TODO: Save the choice to the database
  };
  const ShowNext = () => {
    console.log("Next one. TODO: Show the next restaurant");
    //TODO: Show the next restaurant
  };
  return (
    <div className="app-flexbox">
      <div className="app-content">
        <div className="app-title-box">
          <p>Does this sound good?</p>
        </div>
        <div>
          <p>Cuisine: {cuisine}</p>
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
