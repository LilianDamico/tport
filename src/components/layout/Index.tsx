import React, { ReactNode } from 'react';
import { Container } from './Layout';
import MainHeader from '../mainheader/Index';
import Aside from '../aside/Index';
import Content from '../content/Index';

interface ILayoutProps {
  children: React.ReactNode;
}


const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content>{ children }</Content>     
    </Container>
  );
}

export default Layout;
