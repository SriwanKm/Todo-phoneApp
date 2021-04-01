import React, {useState} from "react";
import {ScrollView, FlatList, StyleSheet, Text, View, Alert, Keyboard, TouchableWithoutFeedback} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import firebase from './util/firebase.js'

const App = () => {

        const todoRef = firebase.database().ref('Todo')

        // useEffect(() => {
        //   todoRef.on('value', (snapshot) => {
        //     const todos = snapshot.val()
        //     const taskList = []
        //     for (let id in todos) {
        //       taskList.push({id, ...todos[id]})
        //     }
        //     setTaskList(taskList)
        //   })
        // }, [])

        const deleteTask = id => {
            // todoRef.child(id).remove()
        };

        const taskCompleted = (isCompleted, id) => {
            // todoRef.child(id).update({isCompleted: !isCompleted})
        };


        const [todos, setTodos] = useState([
            {text: "eat cake", key: 1, isCompleted: true},
            {text: "vacuum floor", key: 2, isCompleted: false},
            {text: "kiss daddy", key: 3, isCompleted: true},
            {text: "do dishes", key: 4, isCompleted: false},
            {text: "make cookies", key: 5, isCompleted: true},
        ]);

        const [text, setText] = useState("");

        const onChangeHandler = (text) => {
            setText(text);
        };

        const addTodoHandler = (text) => {
            console.log(todos);
            if (text.length > 0) {
                setTodos(prevTodos => {
                    return [
                        {text: text, key: Math.random().toString(), isCompleted: false},
                        ...prevTodos,
                    ];
                });
                setText("");
            } else {
                Alert.alert(
                    "Uh oh!",
                    "The input can't be empty",
                    [{text: "Understood", onPress: () => console.log("Understood")}]);
            }
            console.log(todos);
        };

        const deleteHandler = key => {
            setTodos(prevTodo => {
                return prevTodo.filter(todo => todo.key !== key);
            });
        };

        const completeHandler = (completed, key) => {
            const updatedTodos = todos.map(todo => {
                if (todo.key == key) todo.isCompleted = !todo.isCompleted
                return todo
            })
            setTodos(updatedTodos)
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
                                data={todos}
                                renderItem={({item}) => (
                                    <TodoItem item={item} DeleteHandler={deleteHandler} CompleteHandler={completeHandler}/>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
;


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
