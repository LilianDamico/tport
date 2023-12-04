import React from 'react';
import { Container, Title, Controller } from './ContentHeader';

interface IContentHeaderProps {
  title: string;
  controllers: React.ReactNode;
  children?: React.ReactNode; // Adicione esta linha se desejar suportar a propriedade children
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title, controllers, children
}) => {
  return (
    <Container>
      <Title>
        <h2>{ title }</h2>
      </Title>
      <Controller>
        { controllers }
      </Controller>
      { children } {/* Adicione esta linha se desejar suportar a propriedade children */}
    </Container>
  );
}

export default ContentHeader;
