import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: #f8abeb;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 20px;

  :hover {
    color: #f8abeb;
  }
  @media screen and  (max-width:1199px) {
    display:none;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
