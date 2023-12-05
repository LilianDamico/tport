import React, { useMemo} from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './Dashboard'; 
import ContentHeader from '../../components/contentheader/Index'; 
import SelectInput from '../../components/selectinput/Index'; 

const Dashboard: React.FC = () => {
    const { type } = useParams(); // Usando o hook useParams para obter o parâmetro da rota

  const title = useMemo(() => {
    return type === 'arrives'
      ? { title: 'Arrives', lineColor: '#E44C4E' }
      : { title: 'Departures', lineColor: '#4B0042' }; 
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
      
    </Container>
  );
}

export default Dashboard;
