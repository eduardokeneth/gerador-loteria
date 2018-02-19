import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import Header from './components/Header';
import ScreenMega from './components/ScreenMega';
import ScreenLoto from './components/ScreenLoto';
import ScreenQuina from './components/ScreenQuina';
import ScreenLotom from './components/ScreenLotom';
import ScreenTime from './components/ScreenTime';
import ScreenDupla from './components/ScreenDupla';
import styles from './style';

const App = () => (
  <View style={styles.viewPrincipal}>
    <Header />
    <Swiper
      paginationStyle={styles.paginationStyle}
      activeDot={<View style={styles.dotsActive} />}
      prevButton={<Text style={styles.arrowLeft}>‹</Text>}
      nextButton={<Text style={styles.arrowRight}>›</Text>}
      dot={<View style={styles.dots} />}
      showsButtons
    >
      <ScreenMega />
      <ScreenLoto />
      <ScreenQuina />
      <ScreenLotom />
      <ScreenTime />
      <ScreenDupla />
    </Swiper>
  </View>
);

export default App;
