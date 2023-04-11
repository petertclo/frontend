import React from "react";
import BigButton from "../components/BigButton";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { chinese, japaneseKorean, indian, southEastAsian } from "../store/actions/Actions";

const Asian: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChineseClick = () => {
    dispatch(chinese());
    navigate("/restaurant-suggestion");
  };
  const handleJapaneseKoreanClick = () => {
    dispatch(japaneseKorean());
    navigate("/restaurant-suggestion");
  };
  const handleSouthEastAsianClick = () => {
    dispatch(southEastAsian());
    navigate("/restaurant-suggestion");
  };
  const handleIndianClick = () => {
    dispatch(indian());
    navigate("/restaurant-suggestion");
  };
  return (
    <div className="app-flexbox">
      <div className="app-content">
        <div className="app-title-box">
          <p>Asian Cuisine</p>
        </div>
        <div className="app-buttons-box">
          <div className="app-button-box">
            <BigButton
              onClick={handleChineseClick}
              backgroundColor="#ff8000"
              width="10rem"
              height="10rem"
            >
              Chinese
            </BigButton>
          </div>
          <div className="app-button-box">
            <BigButton
              onClick={handleJapaneseKoreanClick}
              backgroundColor="#4caf50"
              width="10rem"
              height="10rem"
            >
              Japanese / Korean
            </BigButton>
          </div>
        </div>
        <div className="app-buttons-box">
          <div className="app-button-box">
            <BigButton
              onClick={handleSouthEastAsianClick}
              backgroundColor="#ff8000"
              width="10rem"
              height="10rem"
            >
              South East Asian
            </BigButton>
          </div>
          <div className="app-button-box">
            <BigButton
              onClick={handleIndianClick}
              backgroundColor="#4caf50"
              width="10rem"
              height="10rem"
            >
              Indian
            </BigButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asian;
