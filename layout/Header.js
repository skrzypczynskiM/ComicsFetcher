import React from 'react';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT_COLOR};
`;

export default Item = ({ title }) => {
  return <Title>{title}</Title>;
};
