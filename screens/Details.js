import React from 'react';
import styled from 'styled-components/native';

const ComicImage = styled.ImageBackground`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.SECONDARY_BG_COLOR};
`;

export default Details = ({ route }) => {
  const { path } = route.params;

  return <ComicImage source={{ uri: path }} resizeMode={'contain'} />;
};
