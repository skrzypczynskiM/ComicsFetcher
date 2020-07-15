import React, { useState, useEffect } from 'react';
import uuid from 'uuid-random';

import { StatusBar, ScrollView } from 'react-native';

import axios from 'axios';
import styled from 'styled-components/native';

import Item from '../components/Item';
import Header from '../layout/Header';

const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PageView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BG_COLOR};
`;

export default function Home({ navigation }) {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // default number of comics to fetch
  const numberOfComics = 8;

  const fetchLastComicsId = async (url) => {
    let res = await axios.get(url);
    return res.data.num;
  };

  // generate dynamic endpoint and fetch single comic
  const fetchSingleComic = async (id) => {
    const xkcd_URL = `http://xkcd.com/${id}/info.0.json`;
    return await axios.get(xkcd_URL);
  };

  const fetchAllComics = async (lastComic) => {
    let comics = [];
    for (let i = 0; i < numberOfComics; i++) {
      const res = await fetchSingleComic(lastComic - i);
      const { title, img } = res.data;
      comics.push({ title, img });
    }
    return comics;
  };

  const renderItems = (arr) => {
    return arr.map(({ title, img }) => {
      return (
        <Item
          title={title}
          path={img}
          key={uuid()}
          navigation={navigation}
          isPlaceholder={false}
        />
      );
    });
  };

  // render empty placeholder for each comic
  const renderPlaceholders = () => {
    const placeholders = [];
    for (let i = 0; i < numberOfComics; i++) {
      placeholders.push(<Item key={uuid()} isPlaceholder={true} />);
    }
    return placeholders;
  };

  useEffect(() => {
    (async () => {
      const lastComic = await fetchLastComicsId('https://xkcd.com/info.0.json');
      const allComics = await fetchAllComics(lastComic);
      setIsLoading(false);
      setComics(allComics);
    })();
  }, []);

  return (
    <PageView padding={StatusBar.currentHeight}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Header title="A webcomic of romance, sarcasm, math, and language" />
          {isLoading ? renderPlaceholders() : renderItems(comics)}
        </Container>
      </ScrollView>
    </PageView>
  );
}
