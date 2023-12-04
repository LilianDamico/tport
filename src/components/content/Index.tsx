import React, { ReactNode } from 'react';
import { Container } from './Content';


interface ContentProps {
  children?: ReactNode; // Adicionando uma propriedade children opcional
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <Container>
      
      {children}
    </Container>
  );
}

export default Content;
