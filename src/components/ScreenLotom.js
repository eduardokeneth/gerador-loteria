import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import HeaderLotom from './lotomania/HeaderLotom';
import ContentLotom from './lotomania/ContentLotom';
import { funcaoGeradora } from '../config/functionGenerate';

export default class ScreenMega extends Component {
  state = {
    numbers: funcaoGeradora.gerar(50, 100),
  }

  genarateNumber = () => {
    const numberGenarate = funcaoGeradora.gerar(50, 100);
    this.setState({ numbers: numberGenarate });
  }

  render() {
    return (
      <ScrollView>
        <HeaderLotom numbers={this.state.numbers} />
        <ContentLotom functionGenarate={this.genarateNumber} />
      </ScrollView>
    );
  }
}
