import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';
import { NavLink } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Order">Full Menu</NavLink>
        <NavLink to="/Register">Register</NavLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/Order">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
