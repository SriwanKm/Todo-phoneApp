import React, { useState } from "react";
import { ScrollView, FlatList, StyleSheet, Text, View, Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
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

  // const makeList = () => taskList !== [] ?
  //   taskList.map(el =>
  //     <View>
  //       <Text style={styles.header} key={el.id}>
  //         {el.value}
  //       </Text>
  //       <Button
  //         style={styles.addButton}
  //         title="Delete"
  //         color="pink"
  //         onPress={() => deleteTask(el.id)}/>
  //       <Button
  //         style={styles.addButton}
  //         title="Completed"
  //         color="red"
  //         onPress={() => taskCompleted(el.isCompleted, el.id)}/>
  //     </View>
  //   )
  //   : null

        const [todos, setTodos] = useState([
            { text: "eat cake", key: 1 },
            { text: "vacuum floor", key: 2 },
            { text: "kiss daddy", key: 3 },
            { text: "do dishes", key: 4 },
            { text: "make cookies", key: 5 },
        ]);

        const [text, setText] = useState("");

        const OnChangHandler = (text) => {
            setText(text);
        };

        const AddTodoHandler = (text) => {
            if (text.length > 0) {
                setTodos(prevTodos => {
                    return [
                        { text: text, key: Math.random().toString() },
                        ...prevTodos,
                    ];
                });
                setText("");
            } else {
                Alert.alert(
                    "Uh oh!",
                    "The input can't be empty",
                    [{ text: "Understood", onPress: () => console.log("Understood") }]);
            }
        };

        const DeleteHandler = key => {
            setTodos(prevTodo => {
                return prevTodo.filter(todo => todo.key !== key);
            });
        };

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Header />
                    <View style={styles.contentWrapper}>
                        <AddTodo AddTodoHandler={AddTodoHandler}
                                 OnChangeHandler={OnChangHandler}
                                 text={text}
                        />
                        <View style={styles.listContainer}>
                            <FlatList
                                data={todos}
                                renderItem={({ item }) => (
                                    <TodoItem item={item} DeleteHandler={DeleteHandler} />
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
