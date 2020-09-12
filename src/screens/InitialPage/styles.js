import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #ffffff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
  margin-top: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #2f3a72;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SafraMeiButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 20px;
`;
export const MessageButtonSafra = styled.Text`
  color: #cda437;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: bold;
`;
export const MessageButtonMei = styled.Text`
  color: #212529;
  font-size: 28px;
  font-family: 'Roboto Slab';
`;

export const AtendimentoAbriContaButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const MessageAtendimentoButton = styled.Text`
  color: #2f3a72;
  font-size: 18px;
  font-family: 'Roboto';
`;

export const MessageAbrirContaButton = styled.Text`
  color: #2f3a72;
  font-size: 18px;
  font-family: 'Roboto';
  margin-left: 130px;
`;
