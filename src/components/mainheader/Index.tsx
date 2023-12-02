import React, { useMemo } from 'react';
import Toggle from '../toggle/index';
import emojis from '../../utils/emojis';

import {  Container, Profile, Wellcome, UserName} from './Mainheader'

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice]
   }, []);




  return (
    <Container>
      <Toggle />
      <Profile>
        <Wellcome>Olá, {emoji} </Wellcome>
        <UserName>User</UserName>
      </Profile>
    </Container>
  )
}

export default MainHeader; 
