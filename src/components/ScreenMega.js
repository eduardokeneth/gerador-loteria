import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import HeaderMega from './megasena/HeaderMega';
import ContentMega from './megasena/ContentMega';
import { funcaoGeradora } from '../config/functionGenerate';

export default class ScreenMega extends Component {
  state = {
    numbers: funcaoGeradora.gerar(6, 61),
  }

  genarateNumber = () => {
    const numberGenarate = funcaoGeradora.gerar(6, 61);
    this.setState({ numbers: numberGenarate });
  }

  render() {
    return (
      <ScrollView>
        <HeaderMega numbers={this.state.numbers} />
        <ContentMega functionGenarate={this.genarateNumber} />
      </ScrollView>
    );
  }
}
