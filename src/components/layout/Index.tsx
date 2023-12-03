import React from 'react';
import { Container } from './Layout';
import MainHeader from '../mainheader/Index';
import Aside from '../aside/Index';
import Content from '../content/Index';




const Layout: React.FC = () => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content />
        
      
     
    </Container>
  );
}

export default Layout;
