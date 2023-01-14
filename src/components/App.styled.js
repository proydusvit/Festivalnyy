import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';


export const ListSocial = styled.ul`
display: flex;
justify-content:space-between;


align-items: center;
  text-align: center;
  @media screen and (max-width: 375px)  {
justify-content:center;

    }
@media screen and (min-width: 1199px)  {
justify-content:end;

    }


`;
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


export const LinkTel = styled.a`
display: flex;
justify-content: space-between;
padding:0;

align-items: center;
  text-align:  center;
text-decoration: none;
    color:#fcfcfc;
   font-weight: 500;
    line-height: 1.17;
    font-family: 'Prosto One', cursive;
    letter-spacing: 0.02em;
   list-style-type: none;
    :hover {
    color: #fcfcfc;
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
export const Logo = styled.p`
 text-align: center;
   padding: 5px 5px;
  text-decoration: none;
  

 
  @media screen and (min-width: 1200px) {

margin-right:130px;

    }
 
`;

export const Footer = styled.footer`
padding-top: 10px;
padding-bottom: 10px;
background-color: #fcfcfc;
box-shadow: 0px 2px 10px #f8abeb;
@media screen and (min-width:768px) and (max-width:1199px) {
 padding-top: 25px;
padding-bottom: 5px;
    }
     @media screen and (min-width: 1200px) {
  padding-top: 40px;
padding-bottom: 0;
    }

`;
export const FooterBox = styled.div`
display: block;
justify-content: space-between;
@media screen and (min-width:768px) and (max-width:1199px) {
  display: block;
   
      margi:0;
    }
    @media screen and (min-width: 1200px) {
    display:flex;
      font-size:15px;
    }

`;
export const Div = styled.div`
display:block;

margin-bottom:30px;

@media screen and (min-width:768px) and (max-width:1199px) {
display:flex;

justify-content: space-around;

margin-bottom:20px;
    }
    @media screen and (min-width: 1200px) {
    display:flex;
      
    }

}
`;
export const SocialBox = styled.div`
display:block;


}
`;
export const SocialTitle = styled.h2`
margin-bottom:25px;
font-family: 'Prosto One', cursive;
font-size:28px;
font-weight: 500;
text-align: center;
    line-height: 1.17;
  color: #f8abeb;
    letter-spacing: 0.02em;
     :hover {
    color: #f8abeb;
  }
  @media screen and (min-width:768px) and (max-width:1199px) {
    font-size:24px;
  }
   @media screen and  (max-width:767px) {
    font-size:21px;
    margin-bottom:13px;
   
    align-items: center;
  }

}
`;

export const ListFot = styled.ul`
padding: 0;




`;
export const ItemFot = styled.li`
text-decoration:none;
 margin: 5px 0 5px;
  display: flex;
  text-align: center;
align-items: center;
padding: 0;
justify-content: space-between;
 color:#f8abeb;
  :hover {
    color: #f8abeb;
  }
  @media screen and (min-width:768px) and (max-width:1199px) {
  margin: 5px 0 10px;
    }
    @media screen and (max-width:767px) {
      margin: 5px 0 30px;
    }
 
`;

export const LinkFoot = styled.a`
text-decoration: none;
    color:#f8abeb;
    font-size:16px;
   font-weight: 500;
    line-height: 1.17;
    font-family: 'Prosto One', cursive;
    letter-spacing: 0.02em;
   list-style-type: none;
  margin-left:auto;
    margin-right:auto;
     margin-bottom:10px;
    :hover {
    color: #f8abeb;
    }
     @media screen and (min-width: 768px) {
      font-size:17px;
       
    }
    @media screen and (min-width: 1200px) {
       font-size:18px;
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