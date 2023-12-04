import React from 'react';
import { Container, Content, Filters } from './List';
import ContentHeader from '../../components/contentheader/Index';
import SelectInput from '../../components/selectinput/Index';
import MovimentCard from '../../components/movimentcard/Index';

const List: React.FC = () => {
  const options = [
    { value: '7', label: 'julho' },
    { value: '8', label: 'agosto' },
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
        <SelectInput options={options} />
      </ContentHeader>

      <Filters>
        <button className='tag-filter tag-filter-recurrent' type='button'>Recorrentes</button>
        <button className='tag-filter tag-filter-eventual' type='button'>Eventuais</button>
      </Filters>

      <Content>
        <MovimentCard
          tagColor='#E44C4E'
          title='Conteiner'
          subtitle='Arrives'
          amount='1'
        />
        <MovimentCard
          tagColor='#E44C4E'
          title='Conteiner'
          subtitle='Arrives'
          amount='1'
        />
        <MovimentCard
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
