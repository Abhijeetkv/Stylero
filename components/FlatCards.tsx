import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
        <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
                <Text>Blue</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
                <Text>Green</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
                <Text>Blue</Text>
            </View>
        </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText:  {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    card : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 10,
    },
    cardOne : {
        backgroundColor: 'red'
    },
    cardTwo : {
        backgroundColor: 'blue'
    },
    cardThree : {
        backgroundColor: 'green'
    },
})