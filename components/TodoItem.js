import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const TodoItem = ({item, DeleteHandler}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.textItem}>{item.text}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonComplete}>
                    <Text style={styles.buttonText}>Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonDelete}
                    onPress={() => DeleteHandler(item.key)}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#ebcccc',
        width: '100%',
        height: 150,
        paddingVertical: 25,
        paddingHorizontal: 15,
        borderRadius: 2,
        marginVertical: 10,
        borderStyle: 'dotted',
        borderColor: 'salmon',
        borderWidth: 3,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    textItem: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },

    buttonDelete: {
        backgroundColor: '#e593b7',
        width: '48%',
        padding: 10,
        margin: 5,
    },
    buttonComplete: {
        backgroundColor: '#7bc7c1',
        width: '48%',
        padding: 10,
        margin: 5,
    },
    buttonText: {
        textAlign: 'center',
    },
});

export default TodoItem;
