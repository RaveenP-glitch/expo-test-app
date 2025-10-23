import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

const Home = () => {
  const router = useRouter()
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Number one shelfie app</Text>
      <Button title="Login" onPress={() => router.push('/login')} />
      <Text style={styles.text}>Already have an account? <Link href="/login">Login</Link></Text>
      <Text style={styles.text}>Don't have an account? <Link href="/signup">Signup</Link></Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  }
}) 