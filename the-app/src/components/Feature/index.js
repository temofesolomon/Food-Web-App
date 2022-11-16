import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';
import { SidebarRoute } from '../Layout/Sidebar/SidebarElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Unique resturant</h1>
      <p>89 lory coker obawole fabba</p>
      <p>N0: 090647736389</p>
      <SidebarRoute to="/Order">Order Now</SidebarRoute>
    </FeatureContainer>
  );
};

export default Feature;
