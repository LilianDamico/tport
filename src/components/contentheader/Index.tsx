import React from 'react';
import { Container } from './ContentHeader';

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  controllers?: React.ReactNode; // Adicionando a propriedade controllers à interface
  children?: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, controllers, children }) => {
  return (
    <Container lineColor={lineColor}>
      <h1>{title}</h1>
      {controllers && <div>{controllers}</div>}
      {children && <div>{children}</div>}
    </Container>
  );
};

export default ContentHeader;
