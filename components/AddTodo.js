import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const AddTodo = ({ AddTodoHandler, OnChangeHandler, text }) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputText}
                           value={text}
                           placeholder="e.g. do laundry"
                           onChangeText={OnChangeHandler}
                />
            </View>
            <TouchableOpacity style={styles.buttonContainer}
                              onPress={() => AddTodoHandler(text)}
            >
                <Text style={styles.button}>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
    },
    inputContainer: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: "#e8e8e8",
        height: 50,
        paddingLeft: 15,
        borderRadius: 50,
        width: 350,
    },
    inputText: {
        fontSize: 16,
        textAlign: "center",
    },
    buttonContainer: {
        width: 200,
        height: 40,
        backgroundColor: "#d49d7b",
    },
    button: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        padding: 5,
    },
});

export default AddTodo;
