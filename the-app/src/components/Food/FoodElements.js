import styled from 'styled-components';
import ImgBg from '../../images/pexels-los-muertos-crew-7601440.jpg';
import { Link } from "react-router-dom";


export const FoodContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const FoodContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const NavLink = styled(Link)`
  height: 100vh;
  }
`;

export const FoodItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const FoodH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px gold;
  letter-spacing: 3px;
`;

export const FoodP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const FoodBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: gold;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: yellow;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
