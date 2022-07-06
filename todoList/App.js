import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's Tasks</Text>

      <View style={styles.items}>
        <Task>text={"Task 1"}</Task>
      </View>

    </View>



      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding : "height'}
      style={styles.writeTaskWrapper}>
      <TextInput Style={styles.input} placeholder={'Write a task'} />

      <TouchableOpacity>
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
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight:"bold",
  },
  items:{
    marginTop: 30,
  },

});
