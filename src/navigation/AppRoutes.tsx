import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "../screens/Home";
import TryNew from "../screens/TryNew";
import RestaurantSuggestion from "../screens/RestaurantSuggestion";
import Asian from "../screens/Asian";

const AppRoutes: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/try-new" element={<TryNew />} />
        <Route path="/restaurant-suggestion" element={<RestaurantSuggestion />}></Route>
        <Route path="/asian" element={<Asian />}></Route>
      </Routes>
    );
  };
  
  export default AppRoutes;