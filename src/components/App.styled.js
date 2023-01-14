import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';



export const Item = styled.li`
font-family: 'Prosto One', cursive;
    line-height: 1.17;
    letter-spacing: 0.02em;
   list-style-type: none;
  margin-right: 50px;

padding: 0;

@media screen and (min-width: 768px) {
      margin-right: 20px;
      
    }
    @media screen and (min-width: 1200px) {

 margin-right: 50px;
    }

`;
export const ItemLogo = styled.li`
font-family: 'Pacifico', cursive;
   list-style-type: none;

   margin: 5px 10px 5px 0;
padding: 0;

    @media screen and (min-width:768px) and (max-width:1199px) {
font-size:19px;
    
      margin: 4px 100px 4px 0;
    }
    @media screen and (min-width: 1200px) {
   font-size:26px;
     margin: 10px 180px 10px 0; 
    }


`;





export const Header = styled(Navbar)`
   
  display: flex;
  justify-content: space-between;
align-items: center;

background: #f8abeb;
box-shadow: 5px 2px 5px #fcfcfc;


  > nav {
    display: flex;
  }
  

`;
export const Link = styled(NavLink)`
 
    line-height: 1.17;
 font-size:18px;
  text-decoration: none;
 color: #fcfcfc;
  font-weight: 500;
   :hover {
    color: #fcfcfc;
  }

  
`;
export const LinkLog = styled(NavLink)`
 
    line-height: 1.17;
 font-size:31px;
  text-decoration: none;
 color: #fcfcfc;
  font-weight: 500;
   :hover {
    color: #fcfcfc;
  }
  @media screen and (max-width: 767px) {

 font-size:28px;

    }

  
`;


export const Loader = styled.div`
padding: 100% 100%;
background-color: #fcfcfc;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
  }
`;