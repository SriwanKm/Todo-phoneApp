import React, {useState, useEffect} from "react";
import {FlatList, StyleSheet, View, Alert, Keyboard, TouchableWithoutFeedback} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import firebase from './util/firebase.js'

const App = () => {
    const todoRef = firebase?.database()?.ref('Todos')
    const [todos, setTodos] = useState([
        {text: 'go away', isCompleted: true, id: 77}
    ]);


    useEffect(() => {
        todoRef.on('value', (snapshot) => {
            const todoList = snapshot?.val()
            const todos = []
            for (let id in todoList) {
                todos?.push({id, ...todoList[id]})
            }
            setTodos(todos)
        })
    }, [])

    const [text, setText] = useState("");

    const onChangeHandler = (text) => {
        setText(text);
    };

    const addTodoHandler = (text) => {
        if (text.length > 0) {
            todoRef.push({text: text, isCompleted: false})
            setText("")
        } else {
            Alert.alert(
                "Uh oh!",
                "The input can't be empty",
                [{text: "Understood", onPress: () => console.log("Understood")}]);
        }
    };

    const deleteHandler = id => {
        todoRef.child(id).remove()
    }

    const completeHandler = (id) => {
        const childRef = todoRef?.child(id)
        childRef.once('value', (snapshot) => {
            const data = snapshot?.val()
            childRef?.update({isCompleted: !data?.isCompleted})
        })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Header/>
                <View style={styles.contentWrapper}>
                    <AddTodo AddTodoHandler={addTodoHandler}
                             OnChangeHandler={onChangeHandler}
                             text={text}
                    />
                    <View style={styles.listContainer}>
                        <FlatList
                            keyExtractor={item => item.id}
                            data={todos}
                            renderItem={({item}) => (
                                <TodoItem item={item} DeleteHandler={deleteHandler}
                                          CompleteHandler={completeHandler}/>
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    listContainer: {
        marginTop: 20,
        padding: 15,
        flex: 1,
    },
    contentWrapper: {
        alignItems: "center",
        flex: 1,
    },
});

export default App;
