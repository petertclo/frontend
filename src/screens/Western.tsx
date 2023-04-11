import React from "react";
import BigButton from "../components/BigButton";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { european, australian, american, latinAmerican } from "../store/actions/Actions";

const Western: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEuropeanClick = () => {
    dispatch(european());
    navigate("/restaurant-suggestion");
  };
  const handleAustralianClick = () => {
    dispatch(australian());
    navigate("/restaurant-suggestion");
  };
  const handleAmericanClick = () => {
    dispatch(american());
    navigate("/restaurant-suggestion");
  };
  const handleLatinAmericanClick = () => {
    dispatch(latinAmerican());
    navigate("/restaurant-suggestion");
  };
  return (
    <div className="app-flexbox">
      <div className="app-content">
        <div className="app-title-box">
          <p>Western Cuisine</p>
        </div>
        <div className="app-buttons-box">
          <div className="app-button-box">
            <BigButton
              onClick={handleEuropeanClick}
              backgroundColor="#ff8000"
              width="10rem"
              height="10rem"
            >
              European
            </BigButton>
          </div>
          <div className="app-button-box">
            <BigButton
              onClick={handleAustralianClick}
              backgroundColor="#4caf50"
              width="10rem"
              height="10rem"
            >
              Australian
            </BigButton>
          </div>
        </div>
        <div className="app-buttons-box">
          <div className="app-button-box">
            <BigButton
              onClick={handleAmericanClick}
              backgroundColor="#ff8000"
              width="10rem"
              height="10rem"
            >
              American
            </BigButton>
          </div>
          <div className="app-button-box">
            <BigButton
              onClick={handleLatinAmericanClick}
              backgroundColor="#4caf50"
              width="10rem"
              height="10rem"
            >
              Latin American
            </BigButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Western;
