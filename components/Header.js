import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 30px;
`;

export default Item = (props) => {
  const { title } = props;

  return <Title>{title}</Title>;
};
