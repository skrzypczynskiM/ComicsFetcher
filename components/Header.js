import React from 'react';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 30px;
  flex: 1;
`;

export default Item = (props) => {
  const { title } = props;

  return <Title>{title}</Title>;
};
