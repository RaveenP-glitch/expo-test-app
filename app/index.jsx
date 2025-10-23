import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Logo from '../assets/img/logo_light.png'

const Home = () => {
  const router = useRouter()
  
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={Logo} width={100} height={100} />
      <Text style={[styles.title, { color: 'purple' }]}>The Number one shelfie app</Text>
      <Button title="Login" onPress={() => router.push('/login')} />
      <Text style={styles.text}>Already have an account? <Link href="/login">Login</Link></Text>
      <Text style={styles.text}>Don't have an account? <Link href="/signup">Signup</Link></Text>
      <Text style={styles.text}>Learn more about Shelfie</Text>
      <Text><Link style={styles.link} href="/about">About </Link></Text>
      <Text style={styles.text}>Contact us</Text> 
      <Text><Link style={styles.link} href="/contact">Contact </Link></Text>
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
  },
  img: {
    marginVertical: 20,

  },
  link: {
    color: 'purple',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 10
  }
}) 