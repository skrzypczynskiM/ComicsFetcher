import React from 'react';
import styled from 'styled-components/native';

const ItemContainer = styled.TouchableOpacity`
  flex: 1;
  margin: 5px 0;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f4f4f4;
  align-items: center;
  padding: 15px 10px;
  width: 95%;
  height: 100px;
  border-radius: 6px;
`;

const TitleContainer = styled.View`
  justify-content: flex-start;
  flex: 2;
  align-self: flex-start;
`;
const Title = styled.Text`
  font-size: 18px;
`;

const Icon = styled.Image`
  flex: 1;
  width: 80px;
  height: 80px;
  border-radius: 3px;
  overflow: hidden;
`;

export default Item = (props) => {
  const { title, path, navigation } = props;

  return (
    <ItemContainer
      onPress={() => {
        navigation.navigate('Details', {
          title,
          path,
        });
      }}
    >
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>

      <Icon source={{ uri: path }} />
    </ItemContainer>
  );
};
