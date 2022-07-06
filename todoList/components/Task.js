import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Task= (props) => {
return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpactiy style={styles.square}></TouchableOpactiy>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>

        <Text>{props.text}</Text>
    </View>
    )
}

const styles = StyleSheet.create()

export default Task;