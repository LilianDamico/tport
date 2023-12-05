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
        <MenuItemLink href="/dashboard"><MdDashboard />Dashboard</MenuItemLink>
        <MenuItemLink href="/list/arrivals"><MdArrowUpward />Arrivals</MenuItemLink>
        <MenuItemLink href="/list/departures"><MdArrowDownward />Departures</MenuItemLink>
        <MenuItemLink href="/list/movimentations"><MdMoving />Movimentations</MenuItemLink>
        <MenuItemLink href="/loginpage"><MdExitToApp />LoginPage</MenuItemLink>
      </MenuContainer>
    </Container>
    
  );
}

export default Aside;
