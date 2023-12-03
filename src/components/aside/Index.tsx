import React from 'react';
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdMoving, MdExitToApp } from 'react-icons/md'
import {
  Container, Header, LogImg,
  MenuContainer, MenuItemLink, Title
} from './Aside';
import logoimg from '../../assets/favicon-32x32.png';


const Aside : React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logoimg} alt="Logo" />
      </Header>
      <MenuContainer>
        <Title>
          <h1>TPort  Administração Portuária</h1>
        </Title>
        <MenuItemLink href="#"><MdDashboard />Dashboard</MenuItemLink>
        <MenuItemLink href="#"><MdArrowUpward />Arrivals</MenuItemLink>
        <MenuItemLink href="#"><MdArrowDownward />Departures</MenuItemLink>
        <MenuItemLink href="#"><MdMoving />Movimentations</MenuItemLink>
        <MenuItemLink href="#"><MdExitToApp />LogOut</MenuItemLink>
      </MenuContainer>
    </Container>
    
  );
}

export default Aside;
