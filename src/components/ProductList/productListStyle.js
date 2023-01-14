import styled from "styled-components";

export const Container = styled.div`
  display: flex;
flex-wrap: wrap ;

    max-width: 1200px;
 margin:auto;
 
  padding: 0 15px;
  @media screen and (min-width: 768px) and (max-width: 1199px){
    width: 768px;

  }
  @media screen and (max-width: 767px){
   
    justify-content: center;
  }
  
`;

export const CardWrapper = styled.div`
 
   position: relative;
  border-radius: 7px ;
  width:369px;
  height:350px;
  margin: 0 0 30px 0;
background: rgba(255, 255, 255, 0.1);
 box-shadow: inset 5px 5px 5px #fcfcfc,
    inset -5px -5px 15px #fcfcfc,
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px #fcfcfc;
  border-radius: 15px;
  
  transition: 0.5s;
  :hover {
   background: #f8abeb;
  }
 

  > a {
    text-decoration: none;
  }

  @media screen and (min-width:768px) and (max-width:1199px) {
       margin-right: 30px;
    :nth-child(even) {
        
        margin-right: 0 ;
      }
     
       width:354px;
       
    }
     @media screen and (min-width: 1200px) {
        margin: 0 30px 30px 0;
       :nth-child(3n) {
        
        margin-right: 0 ;

      }
        
     
    
`;
export const Num = styled.h2`
    position: absolute;
  top: -10px;
  right: 30px;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.1);
`;
export const ProductName = styled.h3`
padding-top: 15px;
    font-size: 1.8rem;
  color: #f8abeb;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 10px;
   font-weight: 500;
    line-height: 1.17;
    font-family: 'Prosto One', cursive;
    letter-spacing: 0.02em;
`;
export const ProductText = styled.p`
font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  transition: 0.5s;
     font-weight: 500;
    line-height: 1.17;
    font-family: 'Prosto One', cursive;
    letter-spacing: 0.02em;
 

`;
export const Box = styled.div`
 position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
box-shadow: 0px 2px 10px #fcfcfc;
  background:#232427;;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
  :hover {
  transform: translateY(-50px);
  :before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
}
`;
export const Content = styled.div`
padding: 20px;
  text-align: center;
`;
