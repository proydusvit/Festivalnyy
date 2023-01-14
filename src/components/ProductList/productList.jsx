import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper, ProductName, ProductText, Box, Content, Num} from './productListStyle'
import { ColorRing } from 'react-loader-spinner'
import { useState, useEffect } from "react";
import { Loader } from "../../components/App.styled";
export const ProductList = ({ products }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])
  
  return (
  <div>
    {
      loading? <Loader><ColorRing
  visible = { true }
  height = "200"
  width = "200"
  ariaLabel = "blocks-loading"
  wrapperStyle = {{ } }
  wrapperClass = "blocks-wrapper"
  colors = { ['#f8abeb', '#f8abeb', '#f8abeb', '#f8abeb', '#f8abeb']} /></Loader> :
  <Container>
   
         
    {products.map((product) => (
        
      <CardWrapper key={product.id}>
          
        <Link to={`${product.id}`} state={{ from: location }}>
          <Box>
            <Content>
         
            
              <img src={product.img.map((imgs) => (imgs.preview))} alt="" width="368px" height="240px" />
              <Num>{product.mindetalis}</Num>
              <ProductName>{product.name}</ProductName>
              <ProductText>Дізнатися більше</ProductText>
              
            </Content>
          </Box>
        </Link>
      </CardWrapper>
    
  
   
    ))}
  </Container>
      }
      </div>
  );
};

