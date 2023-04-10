import React from "react";
import BigButton from "../components/BigButton";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { trySomethingNew, somethingFamiliar } from "../store/actions/Actions";

const Home: React.FC = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleTryNewClick = () => {
    dispatch(trySomethingNew());
    navigate("/try-new");
  };
  const handleFamiliarClick = () => {
    dispatch(somethingFamiliar());
  };
  return (
    <div className="app-flexbox">
      <div className="app-content">
        <div className="app-title-box">
          <p>Decide your next meal</p>
        </div>
        <div className="app-buttons-box">
          <div className="app-button-box">
            <BigButton
              onClick={handleTryNewClick}
              backgroundColor="#ff8000"
              width="10rem"
              height="10rem"
            >
              Try something new
            </BigButton>
          </div>
          <div className="app-button-box">
            <BigButton
              onClick={handleFamiliarClick}
              backgroundColor="#4caf50"
              width="10rem"
              height="10rem"
            >
              Something familiar
            </BigButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
