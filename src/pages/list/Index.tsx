import React from 'react';
import { Container, Content } from './List';
import ContentHeader from '../../components/contentheader/Index';
import SelectInput from '../../components/selectinput/Index';
import MovimentCard from '../../components/movimentcard/Index';

const List: React.FC = () => {
  const options = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
  ];

  const controllers = (
    // Defina aqui o conteúdo ou valor correto para 'controllers'
    // Isso pode ser um componente, uma função, ou qualquer outro valor necessário.
    <div>Controllers Content</div>
  );

  return (
    <Container>
      <ContentHeader title="List" controllers={controllers}>
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        <MovimentCard
          cardColor='#113C75'
          tagColor='#E44C4E'
          title='Conteiner'
          subtitle='Arrives'
          amount='1'
        />

      </Content>
    </Container>
  
  );
}

export default List;
