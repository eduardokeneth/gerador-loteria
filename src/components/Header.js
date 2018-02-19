import React from 'react';
import { View, Text } from 'react-native';

import styles from '../style';

const Header = () => <View style={styles.header}><Text style={styles.headerTitle}>{'Gerador de Loteria'.toUpperCase()}</Text></View>;

export default Header;
