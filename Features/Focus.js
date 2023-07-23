import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native'; 
import { TextInput } from 'react-native-paper';
import { color } from '../Util/colors';
import { RoundedButton } from '../Components/RoundedButton';

export const Focus = ({AddActivity}) => {
    const [Activity, setActivity] = useState(null)
  return (
    <View style={styles.container}>
        <View style={styles.input_container}>
            <TextInput style={styles.text_input} onChangeText={setActivity} label='Enter Your Activity'/>
           <RoundedButton  title='+' size={50} onPress={()=>{AddActivity(Activity)}}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
 
    text_input:{
        flex:1,
        marginEnd:15,
    },
    input_container:{
        padding:25,
        flexDirection:'row',
    },
    text: {
        color: color.white,
    },
});
