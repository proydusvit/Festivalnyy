import { useParams, useLocation } from "react-router-dom";
import { getProductById } from "../../festik";
import { BackLink } from "../../components/Backlink/backLink";
import { ConteinerDetalis, Main, TitleDetalis, TitleDetalisTwo, A} from "./productDetalis.style";
import IndividualIntervalsExample from "../../components/Carusel/Carusel";
import { ColorRing } from 'react-loader-spinner'
import { useState, useEffect } from "react";
import { Loader } from "../../components/App.styled";
import CallIcon from '@mui/icons-material/Call';
import {blueGrey } from '@mui/material/colors';
import {LinkFoot} from "../../components/Footer/Footer.style"
const ProductDetalis = () => {
const primary = blueGrey[50] ; 
  const { id } = useParams();
  
  const product = getProductById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/products";
   const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])
    
  return (
       <div>
      {
        loading ? <Loader><ColorRing
          visible={true}
          height="200"
          width="200"
          ariaLabel="blocks-loading"
          wrapperStyle={{}
          }
          wrapperClass="blocks-wrapper"
          colors={['#f8abeb', '#f8abeb', '#f8abeb', '#f8abeb', '#f8abeb']} /></Loader> :
          <ConteinerDetalis>
            <BackLink to={backLinkHref}>Назад</BackLink>
            <Main>
          
      
              <TitleDetalis>{product.detalis}</TitleDetalis>
              <IndividualIntervalsExample />
                
           

              <TitleDetalisTwo>{product.detalisTwo}</TitleDetalisTwo>
             <LinkFoot href="tel:+380968264130">  <div style={{
              
        padding: "12px 16px",
        borderRadius: 4,
        backgroundColor: "pink",
                color: "white",
                textAlign: "center",
                justifyContent:"center",
                marginRight: "auto",
                marginLeft: "auto",
                marginBottom: 30,
                marginTop:30,
       width: 270,
      }}>
Забронювати зараз<CallIcon sx={{ color: primary }} />
           </div></LinkFoot>
            </Main>
          </ConteinerDetalis>}
         </div>
  );
};
export default ProductDetalis;