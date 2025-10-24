import { Stack, Slot } from 'expo-router'
import { StyleSheet, Text, View, useColorScheme, StatusBar } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

export default function RootLayout() {
  const colorScheme = Colors[colorScheme] ?? Colors.light;
  console.log(colorScheme);

  return (
    <>
      <StatusBar value="auto" style={colorScheme.background} />
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme.primaryDark
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
          textAlign: 'center'
        }
      }}>
        <Stack.Screen name="index" options={{ title: '' }} />
        <Stack.Screen name="login" options={{ title: 'Login' }} />
        <Stack.Screen name="signup" options={{ title: 'Signup' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />
      </Stack>
    </>
  )
}

const styles = StyleSheet.create({})