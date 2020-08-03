import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItems, NavText, SignOutButton, SignOutButtonText } from './styles';

const Menu = ({translateY}) => {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode 
          value='https://twitter.com'
          size={80}
          backgroundColor='#8b10ae'
          color='#FFF'
        />
      </Code>

      <Nav>
        <NavItems>
          <Icon name='help-outline' size={20} color='#FFF' />
          <NavText>Me ajuda</NavText>
        </NavItems>

        <NavItems>
          <Icon name='person-outline' size={20} color='#FFF' />
          <NavText>Perfil</NavText>
        </NavItems>

        <NavItems>
          <Icon name='credit-card' size={20} color='#FFF' />
          <NavText>Configurar cartão</NavText>
        </NavItems>

        <NavItems>
          <Icon name='smartphone' size={20} color='#FFF' />
          <NavText>Configurações do App</NavText>
        </NavItems>

        <SignOutButton onPress={() => {}}>
          <SignOutButtonText>Sair do App</SignOutButtonText>
        </SignOutButton>
      </Nav>
    </Container>
  );
}

export default Menu;