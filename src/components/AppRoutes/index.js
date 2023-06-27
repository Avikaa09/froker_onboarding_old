import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "../../pages/Analytics";
import FrokerAnalytics from "../../pages/FrokerAnalytics";
import Offers from "../../pages/Offers";
import Restaurants from "../../pages/Restaurants";
import Subscription from "../../pages/Subscription/Subscription";
import RAnalytics from "../../pages/Analytics/RAnalytics";
import {CAnalytics} from "../../pages/Analytics/CAnalytics";
import AddRestaurant from "../AddRestaurant";

function AppRoutes(){
return (
  
    <Routes>
       <Route path="/Analytics" element={<Analytics/>}/>
       <Route path="/Offers" element={<Offers/>}/>
       <Route path="/FrokerAnalytics" element={<FrokerAnalytics/>}/>
       <Route path="/Ranalytics" element={<RAnalytics/>}/>
       <Route path="/Canalytics" element={<CAnalytics/>}/>
       <Route path="/Restaurants" element={<Restaurants/>}/>
       <Route path="/Subscription" element={<Subscription/>}/>
       <Route path="/AddRestaurant" element={<AddRestaurant/>}/>
    </Routes>

  
)
}

export default AppRoutes;