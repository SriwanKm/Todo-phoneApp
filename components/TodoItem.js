import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';

const TodoItem = ({item, DeleteHandler, CompleteHandler}) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.itemContainer}>
                <Text style={item.isCompleted ? styles.textItemCompleted : styles.textItem}>{item.text}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonComplete}
                                      onPress={() => CompleteHandler(item.isCompleted, item.key)}
                    >
                        <Text style={styles.buttonText}>{item.isCompleted ? "Incomplete" : "Completed"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonDelete}
                        onPress={() => DeleteHandler(item.key)}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        // backgroundColor: '#ebcccc',
        backgroundColor: '#d2d1d1',
        width: '100%',
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

    textItemCompleted: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
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
