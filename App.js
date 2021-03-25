import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import firebase from './util/firebase.js'

const App = () => {
  const [task, setTask] = useState("");

  const [taskList, setTaskList] = useState([
    { value: "Do dishes", isCompleted: true },
    { value: "Cook Dinner", isCompleted: false },
    { value: "Take our trash", isCompleted: true },
    { value: "Do homework", isCompleted: false },
    { value: "Eat cake", isCompleted: true },
    { value: "Visit daddy", isCompleted: false },
  ]);

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

  const addTask = () => {
    if (task !== "") {
      const taskDetails = {
        value: task,
        isCompleted: false,
      };

      console.log(taskDetails);
      setTaskList([...taskList, taskDetails]);

      setTask("")
      alert("Added task")
    }
  };

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Todo App</Text>
      </View>
      <View style={styles.inputText}>
        <TextInput
          onChangeText={setTask}
          value={task}
          placeholder="Add a task here.."
        />
      </View>
      <View style={styles.addButton}>
        <Button onPress={addTask} title="Add Todo" color="#841584" />
      </View>
      <FlatList
        data={taskList}
        renderItem={({ item }) =>
          <View style={styles.todos}>

            <Text style={styles.listText}>{item.value}</Text>

            <Button
              // onPress={onPressLearnMore}
              title="Completed"
              color="green"
            />
            <View style={{ height: 10 }}/>
            <Button
              // onPress={onPressLearnMore}
              title="Delete"
              color="red"
            />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      padding: 20,
    },
    boldText: {
      fontWeight: "bold",
      fontSize: 50,
      textAlign: "center",
    },
    listText: {
      fontWeight: "bold",
      fontSize: 25,
      textAlign: "center",
      marginVertical: 10,
    },
    inputText: {
      marginTop: 10,
      width: 300,
      borderRadius: 50,
      paddingHorizontal: 20,
      paddingVertical: 5,
      backgroundColor: "#e5e5e5",
    }
    ,
    addButton: {
      marginVertical: 10,
      paddingVertical: 15,
      width: 100,
    },
    listButton: {
      marginVertical: 3,
      width: 200,
    },
    todos: {
      marginVertical: 5,
      backgroundColor: "pink",
      textAlign: "center",
      paddingHorizontal: 15,
      paddingVertical: 15,
      width: 380,
      height: 180,
    }
  }
)


export default App;
