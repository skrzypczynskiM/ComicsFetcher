import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Item from './components/Item';

export default function App() {
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

  useEffect(() => {
    (async () => {
      const lastComic = await fetchLastComicsId();
      const allComics = await fetchAllComics(lastComic);
      setComics(allComics);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Here are my comics:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
