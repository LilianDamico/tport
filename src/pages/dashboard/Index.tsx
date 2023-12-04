import React from 'react';
import { Container } from './Dashboard'; 
import ContentHeader from '../../components/contentheader/Index'; 
import SelectInput from '../../components/selectinput/Index'; 

const Dashboard: React.FC = () => {
  const options = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" controllers={<SelectInput options={options} />} />
      {/* Restante do conteúdo da página */}
    </Container>
  );
}

export default Dashboard;
