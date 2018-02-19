import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import styles from '../../style/lotostyle';

export default class Content2 extends Component {
  state = {
    acumulado: 'sim',
    ganhadores: 0,
    premio: [],
    valorAcumulado: '',
    sorteio: [],
    estimativa: 0,
    data: '',
    numero: 0,
    proximo: '',
  };

  componentDidMount() {
    axios.get('https://www.lotodicas.com.br/api/lotofacil')
      .then((response) => {
        this.setState({
          acumulado: response.data.acumulado,
          ganhadores: response.data.ganhadores,
          premio: response.data.rateio,
          valorAcumulado: response.data.valor_acumulado,
          sorteio: response.data.sorteio,
          estimativa: response.data.proximo_estimativa,
          data: response.data.data,
          numero: response.data.numero,
          proximo: response.data.proximo_data,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const {
      acumulado, ganhadores, valorAcumulado, numero,
    } = this.state;
    const premio = this.state.premio[0];
    const sorteio = this.state.sorteio.join('   ');
    const estimativa = this.state.estimativa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const data = this.state.data.split('-').reverse().join('/');
    const proximo = this.state.proximo.split('-').reverse().join('/');
    return (
      <View style={styles.content1}>
        <View style={styles.boxContent2}>
          { acumulado === 'sim' ? <View style={styles.viewAcumulado}><Text style={styles.content2Title}>{'Acumulado!  '.toLocaleUpperCase()}</Text><Text style={styles.textPremio}>{`-  R$  ${valorAcumulado.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}</Text></View> : <View style={styles.viewAcumulado}><Text style={styles.content2Title}> { ganhadores[0].toFixed(0) === 1 ? ganhadores[0].toFixed(0) + ' ganhador  '.toLocaleUpperCase() : ganhadores[0].toFixed(0) + ' ganhadores  '.toLocaleUpperCase()}</Text><Text style={styles.textPremio}>{`-  R$  ${premio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}</Text></View> }
          <Text style={styles.content2Subtitle}>{`Sorteio realizado:  ${data}  - Número: ${numero}`}</Text>
        </View>
        <View style={styles.content2Numbers}>
          <Text style={styles.content2NText}>{sorteio}</Text>
        </View>
        <View style={styles.boxContent2_3}>
          <View style={styles.content2_3}>
            <Text style={styles.content2Title2}>Próximo concurso:</Text>
            <Text style={styles.textDefault}>{proximo}</Text>
          </View>
          <View style={styles.content2_3}>
            <Text style={styles.content2Title2}>Estimativa de prêmio:</Text>
            <Text style={styles.textDefault}>{`R$ ${estimativa}`}</Text>
          </View>
        </View>
      </View>
    );
  }
}
