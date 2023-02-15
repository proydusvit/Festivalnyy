import { useParams, useLocation } from "react-router-dom";
import { getProductById } from "../../festik";
import { BackLink } from "../../components/Backlink/backLink";
import { ConteinerDetalis, Main, TitleDetalis, TitleDetalisTwo, A} from "./productDetalis.style";
import IndividualIntervalsExample from "../../components/Carusel/Carusel";
import { ColorRing } from 'react-loader-spinner'
import { useState, useEffect } from "react";
import { Loader } from "../../components/App.styled";

const ProductDetalis = () => {

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

           
            </Main>
          </ConteinerDetalis>}
         </div>
  );
};
export default ProductDetalis;