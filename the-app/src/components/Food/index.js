import React, { useState } from 'react';
import Navbar from '../Layout/Navbar';
import Sidebar from '../Layout/Sidebar';
import { SidebarRoute } from "../Layout/Sidebar/SidebarElements";
import {
  FoodContainer,
  FoodContent,
  FoodItems,
  FoodH1,
  FoodP,
  
} from './FoodElements';

const Food = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FoodContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <FoodContent>
        <FoodItems>
          <FoodH1>Unique Food Resturant</FoodH1>
          <FoodP>The home of great food</FoodP>
          <SidebarRoute to="/Order">Order Now</SidebarRoute>
        </FoodItems>
      </FoodContent>
    </FoodContainer>
  );
};

export default Food;
