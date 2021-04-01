import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>My Todo App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#d49d7b',
        width: '100%',
        height: 60,
        padding: 15,
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;
