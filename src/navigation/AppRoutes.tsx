import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "../screens/Home";
import TryNew from "../screens/TryNew";
import RestaurantSuggestion from "../screens/RestaurantSuggestion";
import Asian from "../screens/Asian";
import Western from "../screens/Western";

const AppRoutes: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/try-new" element={<TryNew />} />
        <Route path="/restaurant-suggestion" element={<RestaurantSuggestion />}></Route>
        <Route path="/asian" element={<Asian />}></Route>
        <Route path="/western" element={<Western />}></Route>
      </Routes>
    );
  };
  
  export default AppRoutes;