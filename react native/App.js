import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}> 
      <View style={styles.topBox}>
        <Image
          source={(require('./assets/logo.png'))}
          style={styles.img}
        />
        <Text style={styles.text}>My first app in react native.</Text>
      </View>
      <View style={styles.bottomBox}>
        <Image
          source={(require('./assets/reactLogo.png'))}
          style={styles.reactImg}
        />
        <Text style={styles.reactText}>React Native</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    gap: 10,
  },

  img: {
    width: 300,
    height: 150,
    resizeMode: 'contain'
  },
  
  topBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#222',
    padding: 20,
    height: 300,
    borderRadius: 20,
  },

  text: {
    color: '#fff',
  },

  bottomBox: {
    isplay: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: 'yellow',
    padding: 20,
    height: 300,
    borderRadius: 20,
  },

  reactImg: {
    width: 300,
    height: 200,
    resizeMode: 'contain'
  },

  reactText: {
    fontWeight: 500,
  },
})