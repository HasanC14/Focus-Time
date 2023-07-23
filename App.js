import React, { useState }  from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { color } from './Util/colors';
import { Focus } from './Features/Focus';
export default function App() {
  const [CurrentActivity, setCurrentActivity] = useState(null)
  return (
    <SafeAreaView style={styles.container}>
      {!CurrentActivity?
      (<Focus AddActivity={setCurrentActivity}/>):
      (<View>
        <Text>Ok done</Text>
      </View>)}
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS==='android' ? StatusBar.currentHeight : 0,
    backgroundColor: color.darkblue
  },
});
