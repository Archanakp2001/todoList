import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return(
         <View style={styles.item}>
             <View style={styles.itemLeft}>
                 <View style={styles.square}></View>
                 <Text style={styles.itemText}>{props.text}</Text>
             </View>
             <View style={styles.circle}></View>
         </View>
    );
}

export default Task;

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 18,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        alignItems: 'center'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#4FA6FF',
        opacity: 0.3,
        borderRadius: 5,
        marginRight: 10,
    },
    itemText: {
        maxWidth: '80%',
    },
    circle: {
        height: 12,
        width: 12,
        borderRadius: 5,
        borderColor: '#52A4F8',
        borderWidth: 2,
    },
});