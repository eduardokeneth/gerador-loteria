import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import HeaderDupla from './duplasena/HeaderDupla';
import ContentDupla from './duplasena/ContentDupla';
import { funcaoGeradora } from '../config/functionGenerate';

export default class ScreenMega extends Component {
  state = {
    numbers1: funcaoGeradora.gerar(6, 51),
    numbers2: funcaoGeradora.gerar(6, 51),
  }

  genarateNumber = () => {
    this.setState({ numbers1: funcaoGeradora.gerar(6, 51), numbers2: funcaoGeradora.gerar(6, 51) });
  }

  render() {
    return (
      <ScrollView>
        <HeaderDupla numbers1={this.state.numbers1} numbers2={this.state.numbers2} />
        <ContentDupla functionGenarate={this.genarateNumber} />
      </ScrollView>
    );
  }
}
