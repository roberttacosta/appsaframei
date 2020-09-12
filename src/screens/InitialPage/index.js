import React from 'react';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SafraMeiButton,
  MessageButtonSafra,
  MessageButtonMei,
  AtendimentoAbriContaButton,
  MessageAtendimentoButton,
  MessageAbrirContaButton,
} from './styles';
import {Text, CheckBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoSafra from '../../assets/LogoSafra.svg';
import SignInput from '../../components/SignInput';

export default () => {

    const navigation = useNavigation();

    const handleMessageButtonClick = () => {
    navigation.navigate('SafraMeiInformations');
}

  return (
    <Container>
      <LogoSafra width="213" height="93" margin-top="300" />

      <InputArea>
        <SignInput />

        <CustomButton>
          <CustomButtonText>Acessar</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SafraMeiButton onPress={handleMessageButtonClick}>
        <MessageButtonSafra>#Safra</MessageButtonSafra>
        <MessageButtonMei>mei</MessageButtonMei>
      </SafraMeiButton>

      <AtendimentoAbriContaButton>
        <MessageAtendimentoButton>Atendimento</MessageAtendimentoButton>
        <MessageAbrirContaButton>Abrir Conta</MessageAbrirContaButton>
      </AtendimentoAbriContaButton>
    </Container>
  );
};
