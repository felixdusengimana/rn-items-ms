import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Messages')}>
        <Text>Go to Messages</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#09f',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
 });