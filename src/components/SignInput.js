import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  width: 100%;
  height: 1px;
  background-color: #cda437;
  align-items: center;
  margin-bottom: 30px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export default () => {
  return <InputArea>
      <Input />
  </InputArea>;
};
