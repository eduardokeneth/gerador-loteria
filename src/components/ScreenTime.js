import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import HeaderTime from './timemania/HeaderTime';
import ContentTime from './timemania/ContentTime';
import { funcaoGeradora } from '../config/functionGenerate';

export default class ScreenMega extends Component {
  state = {
    numbers: funcaoGeradora.gerar(10, 81),
  }

  genarateNumber = () => {
    const numberGenarate = funcaoGeradora.gerar(10, 81);
    this.setState({ numbers: numberGenarate });
  }

  render() {
    return (
      <ScrollView>
        <HeaderTime numbers={this.state.numbers} />
        <ContentTime functionGenarate={this.genarateNumber} />
      </ScrollView>
    );
  }
}
