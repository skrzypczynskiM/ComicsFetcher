import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 30px;
  flex: 1;
  font-weight: bold;
  color: #f8f8ff;
  color: #fffaf0;
  color: #ccc8c3;
  color: #fff;
`;

export default Item = (props) => {
  const { title } = props;

  // return <Text style={styles.container}>{title}</Text>;
  return <Title>{title}</Title>;
};

const styles = StyleSheet.create({
  container: {
    fontWeight: 'bold',
  },
});
