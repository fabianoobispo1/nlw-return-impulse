import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyright() {
    return (
        <View>
            <Text style={styles.text}>
                Feito com ♥ por Fabiano Bispo
                {/* https://github.com/fabianoobispo1 */}
            </Text>
        </View>
    );
}