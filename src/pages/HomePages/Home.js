import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`

    margin: 0 auto;
    padding-top: 110px;
    padding-bottom: 110px;
    text-align: center;
    background-color: white;
 
    max-width: 1600px;

    background-image: url("https://res.cloudinary.com/dg6fnnbpd/image/upload/v1676405306/o_1g076nstq7k0q1arho49s14ua1u_jjnzy2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;


    @media screen and (min-width: 768px) {
          padding-top: 118px;
        padding-bottom: 118px;
    max-width: 768px;
    }
    @media screen and (min-width: 1200px) {
        padding-top: 163px;
        padding-bottom: 163px;
      
    max-width: 1600px;
}

`;
export const ConteinerMain = styled.div`

width: 768px;
margin: auto;
padding: 0 15px;
@media screen and (max-width: 767px)  {
   width: 320px;
}

`;
export const TitleMain = styled.h1`

  max-width: 360px;

  
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;

    font-weight: 900;
    font-size: 20px;
    line-height: 42px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
letter-spacing: 0.06em;
color: #fcfcfc;
text-transform: uppercase;

font-family: 'Prosto One', cursive;
  
      @media screen and (min-width: 768px) {
        min-width: 696px;
 margin-bottom: 30px;
        font-size: 54px;
        line-height: 1.36;
       
  }

`;
export const Link = styled(NavLink)`
text-decoration: none;
font-size: 10px;
font-weight: 700;
line-height: 1.87;
letter-spacing: 0.06em;
color: #fcfcfc;
cursor: pointer;
background-color: #f8abeb;
padding: 15px 20px;
border: 0;
border-radius: 4px;

 :hover {
    background-color: #f8abeb;
    color:#fcfcfc;
    
  };
  
   @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-size: 13px;
     padding: 15px 20px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 16px;
        padding: 20px 30px;
}

`
