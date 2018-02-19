import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import HeaderLoto from './lotofacil/HeaderLoto';
import ContentLoto from './lotofacil/ContentLoto';
import { funcaoGeradora } from '../config/functionGenerate';

export default class ScreenMega extends Component {
  state = {
    numbers: funcaoGeradora.gerar(15, 26),
  }

  genarateNumber = () => {
    const numberGenarate = funcaoGeradora.gerar(15, 26);
    this.setState({ numbers: numberGenarate });
  }

  render() {
    return (
      <ScrollView>
        <HeaderLoto numbers={this.state.numbers} />
        <ContentLoto functionGenarate={this.genarateNumber} />
      </ScrollView>
    );
  }
}
