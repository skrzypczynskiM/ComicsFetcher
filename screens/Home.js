import React, { useState, useEffect } from 'react';
import uuid from 'uuid-random';

import { StatusBar, ScrollView } from 'react-native';

import axios from 'axios';
import styled from 'styled-components/native';

import Item from '../components/Item';
import Header from '../components/Header';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PageView = styled.SafeAreaView`
  /* padding-top: ${(props) => `${props.padding}px` || 0}; */
  flex: 1;
  background: #dcdcdc;
`;

export default function Home({ navigation }) {
  const [comics, setComics] = useState([]);

  // default number of items = 8
  const numberOfComics = 8;
  const url = 'https://xkcd.com/info.0.json';

  // generate dynamic endpoint for a single comic
  const generateURL = (id) => {
    return `http://xkcd.com/${id}/info.0.json`;
  };

  const fetchSingleComic = async (id) => {
    const xkcd_URL = generateURL(id);
    return await axios.get(xkcd_URL);
  };

  const fetchLastComicsId = async () => {
    let res = await axios.get(url);
    return res.data.num;
  };

  const fetchAllComics = async (lastComic) => {
    let comics = [];
    for (let i = 0; i < numberOfComics; i++) {
      let res = await fetchSingleComic(lastComic - i);
      const { title, img } = res.data;
      comics.push({ title, img });
    }
    return comics;
  };

  const renderItems = (arr) => {
    return arr.map(({ title, img }) => {
      return (
        <Item title={title} path={img} key={uuid()} navigation={navigation} />
      );
    });
  };

  useEffect(() => {
    (async () => {
      const lastComic = await fetchLastComicsId();
      const allComics = await fetchAllComics(lastComic);
      setComics(allComics);
    })();
  }, []);

  return (
    <PageView padding={StatusBar.currentHeight}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Header title="A webcomic of romance, sarcasm, math, and language" />
          {renderItems(comics)}
        </Container>
      </ScrollView>
    </PageView>
  );
}
