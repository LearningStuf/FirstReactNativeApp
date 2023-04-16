import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native-web'

const loginScreen = () => {
  return (
    <KeyboardAvoidingView
        style = {styles.container}
        behavior = "padding"
    >
      <Text>Logn Screen</Text>
    </KeyboardAvoidingView>
  )
}

export default loginScreen

const styles = StyleSheet.create({})