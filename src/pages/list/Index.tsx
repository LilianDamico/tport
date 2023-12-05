import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom'; // Importando o hook useParams
import { Container, Content, Filters } from './List';
import ContentHeader from '../../components/contentheader/Index';
import SelectInput from '../../components/selectinput/Index';
import MovimentCard from '../../components/movimentcard/Index';

const List: React.FC = () => {
  const { type } = useParams(); // Usando o hook useParams para obter o parâmetro da rota

  const title = useMemo(() => {
    return type === 'arrives'
      ? { title: 'Arrives', lineColor: '#E44C4E' }
      : { title: 'Departures', lineColor: '#<COR_DEPARTURES>' }; // Substitua <COR_DEPARTURES> pela cor desejada
  }, [type]);

  const months = [
    { value: '7', label: 'julho' },
    { value: '8', label: 'agosto' },
  ];

  const years = [
    { value: '2023', label: 'dezembro' },
    { value: '2024', label: 'janeiro' },
  ];

  return (
    <Container>
      <ContentHeader title={title.title} lineColor={title.lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button className='tag-filter tag-filter-recurrent' type='button'>
          Recorrentes
        </button>
        <button className='tag-filter tag-filter-eventual' type='button'>
          Eventuais
        </button>
      </Filters>

      <Content>
        <MovimentCard
          tagColor={title.lineColor}
          title='Conteiner'
          subtitle={type === 'arrives' ? 'Arrives' : 'Departures'}
          amount='1'
        />
        <MovimentCard
          tagColor={title.lineColor}
          title='Conteiner'
          subtitle={type === 'arrives' ? 'Arrives' : 'Departures'}
          amount='1'
        />
        <MovimentCard
          tagColor={title.lineColor}
          title='Conteiner'
          subtitle={type === 'arrives' ? 'Arrives' : 'Departures'}
          amount='1'
        />
      </Content>
    </Container>
  );
};

export default List;
