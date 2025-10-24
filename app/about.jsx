import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  const colorScheme = Colors[colorScheme] ?? Colors.light;
  console.log(colorScheme);
  
  return (
    <View style={[styles.container, { backgroundColor: colorScheme.background }]}>
      <Text style={styles.title}>About Page</Text>
      <Link style={styles.link} href="/">Back to Home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    link: {
        color: 'purple',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop: 10
    }
})