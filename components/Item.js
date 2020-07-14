import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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
  /* background-color: #f4f4f4; */
  align-items: flex-start;
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
  const { title, path } = props;

  return (
    <ItemContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>

      <Icon source={{ uri: path }} />
    </ItemContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: 'dodgerblue',
//     borderWidth: 1,
//     borderColor: '#20232a',
//     borderRadius: 6,
//     flexDirection: 'row',
//     marginVertical: 10,
//     marginHorizontal: 5,

//     justifyContent: 'space-between',
//   },
// });
