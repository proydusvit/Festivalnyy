import { useParams } from "react-router-dom";
import { Carousel } from 'react-bootstrap'
import { getProductById } from "../../festik";
import { Img } from "./carusel.style";

function IndividualIntervalsExample() {
    const { id } = useParams();
  const product = getProductById(id);
  

  return (
  <div>
       
    <Carousel>
    
      <Carousel.Item  interval={4000} >
          <Img
            
          className="d-block w-100"
          src={product.img.map((imgs) => (imgs.original))} 
          alt="First slide"
          width={"1100px"}
            height={"500px"}
             
        />
        <Carousel.Caption >
            <h2>{product.name} - {product.square}</h2>
            <h3>{product.price}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <Img
          className="d-block w-100"
          src={product.img.map((imgs) => (imgs.originaltwo))} 
          alt="Second slide"
           width={"1100px"}
          height={"500px"}
        />
        <Carousel.Caption>
           <h2>{product.name} - {product.square}</h2>
            <h3>{product.price}</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
     
           </Carousel> 
       
    </div>
         );
      
}

export default IndividualIntervalsExample;