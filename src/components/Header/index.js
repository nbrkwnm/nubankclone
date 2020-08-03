import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Logo, Title } from './styles';

import logo from '../../assets/Nubank_Logo.png';

const Header = () => {
  return <Container>
    <Top>
      <Logo source={logo} />
      <Title>Noboru</Title>
    </Top>
    <Icon name='keyboard-arrow-down' size={20} color='#FFF'/>
  </Container>;
}

export default Header;