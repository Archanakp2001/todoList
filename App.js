import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask([null]);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>

      {/* Taks section */}

      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* List of task items */}

          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }

        </View>
      </View>

      {/* Section to add tasks */}

      <KeyboardAvoidingView 
        style={styles.writeTaskWrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        
        <TextInput style={styles.input} placeholder={'Write your task'} value={task} onChangeText={text => setTask(text)}  />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCECF',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  taskWrapper: {
    paddingTop: 90,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#fff',
    width: 280,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderColor: '#BEC0C3',
    borderWidth: 1
  },
  addWrapper: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderColor: '#BEC0C3',
    borderWidth: 1,
    alignItems: 'center'
  },
  addText: {
    fontSize: 20,
    color: '#52A4F8'
  },
});
