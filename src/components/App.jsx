import { Routes, Route } from "react-router-dom";
import HomePages from "../pages/HomePages/HomePages";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { ColorRing } from 'react-loader-spinner'
import { useState, useEffect } from "react";
import { Loader } from "./App.styled";

 
  

import { lazy } from "react";

const Service = lazy(() => import('../pages/Room/Room'))
const ProductDetalis  = lazy(() =>  import('../pages/ProductDetalis/productDetalis'))
const Rules  = lazy(() =>  import('../pages/Ruless/rules'))

const App = () => {
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  },[])

 
  return (
      
    <div>
      {loading? <Loader><ColorRing
        visible={true}
        
  height="200"
  width="200"
  ariaLabel="blocks-loading"
        wrapperStyle={{
  }}
  wrapperClass="blocks-wrapper"
  colors = { ['#f8abeb', '#f8abeb', '#f8abeb', '#f8abeb', '#f8abeb']} /></Loader> :
  <Routes>
  <Route path="/" element={<SharedLayout />}>
        <Route index  element={<HomePages />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:id" element={<ProductDetalis />} />
         <Route path="/rules" element={<Rules />} />

     
          </Route>
          
        </Routes>
      
      }
      
    </div>   
    
 
  );
};
export default App;