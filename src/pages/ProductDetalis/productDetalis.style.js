import styled from "styled-components";

export const ConteinerDetalis = styled.section`

width: 1200px;
margin: auto;
padding: 0 15px;


@media screen and (min-width:768px) and (max-width:1199px) {
   max-width: 768px;

   margin: auto;
}
@media screen and (max-width:767px) {
   width:375px;
      margin: auto;
   
}
@media screen and (max-width:374px) {
   width:320px;
      margin: auto;
   
}

`;

export const TitleDetalisTwo = styled.p`
margin-top: 30px;
text-align: center;
font-size:20px;
color:#808080;
   font-weight: 500;
    line-height: 1.17;
    font-family: 'Prosto One', cursive;
    letter-spacing: 0.02em;
    @media screen and (min-width:768px) and (max-width:1199px) {
        margin-top: 20px;
   font-size:15px;
   margin-bottom: 0px;
    }
    @media screen and (max-width:767px) {
margin-top: 10px;
   font-size:13px;

}

`;
export const TitleDetalis = styled.h2`
text-align: center;
margin-bottom: 30px;
color: #f8abeb;
   font-weight: 500;
    line-height: 1.17;
    font-family: 'Prosto One', cursive;
    letter-spacing: 0.02em;
     @media screen and (min-width:768px) and (max-width:1199px) {
       
   font-size:20px;
}
  @media screen and (max-width:767px) {
margin-bottom: 10px;
   font-size:15px;
}

`;
export const TitleText = styled.p`

`;
export const Conteiner = styled.div`
display: block;
@media screen and (min-width: 768px){
    width: 768px;
    padding: 0 15px;
}

`;
export const Main = styled.main`
margin: 20px 0 80px;
@media screen and (min-width:768px) and (max-width:1199px) {
   margin: 30px 0 30px;
}
 @media screen and (max-width:767px) {
margin: 10px 0 10px;
}

`;
export const A = styled.a`
  text-decoration: none;
  padding: 15px 20px;
  background-color: tomato;
  margin-top: 30px;
`;
