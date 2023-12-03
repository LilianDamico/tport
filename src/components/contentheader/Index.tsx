import React from 'react';
import {Container, Title, Controller} from './ContentHeader'



const ContentHeader: React.FC = () => {
  return (
    <Container>
      <Title>
        <h2>Titulo</h2>
      </Title>
      <Controller>
        <button type="button">Click</button>
        <button type="button">Click</button>
      </Controller>
    </Container>
  );
}



export default ContentHeader;
