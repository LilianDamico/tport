import React from 'react';
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
          <h1>TPort - Administração Portuária</h1>
        </Title>
        <MenuItemLink href="#">
          
        </MenuItemLink>

      </MenuContainer>

    </Container>
    
  );
}

export default Aside;
