import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import HeaderQuina from './quina/HeaderQuina';
import ContentQuina from './quina/ContentQuina';
import { funcaoGeradora } from '../config/functionGenerate';

export default class ScreenMega extends Component {
  state = {
    numbers: funcaoGeradora.gerar(5, 81),
  }

  genarateNumber = () => {
    const numberGenarate = funcaoGeradora.gerar(5, 81);
    this.setState({ numbers: numberGenarate });
  }

  render() {
    return (
      <ScrollView>
        <HeaderQuina numbers={this.state.numbers} />
        <ContentQuina functionGenarate={this.genarateNumber} />
      </ScrollView>
    );
  }
}
