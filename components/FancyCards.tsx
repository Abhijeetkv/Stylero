import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
      <Text style= {styles.headingText}>Anime</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://img.freepik.com/free-photo/beautiful-anime-character-cartoon-scene_23-2151035176.jpg?t=st=1736340006~exp=1736343606~hmac=835b9f79a6488658217ff202ea612211a7c7d5a0f76cde1a411a12fb45000842&w=900'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a palace in Jaipur, India. It is constructed of red and pink sandstone. The palace sits on the edge of the City Palace, Jaipur, and extends
            </Text>
            <Text style={styles.CardFooter}>8 miles</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 8,
    },
    card: {
        width: "100%",
        height: 360,
        borderRadius: 8,
        marginVertical: 12,
        margin: 5
    },
    cardElevated: {
        backgroundColor: 'white',
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12

    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 6
    },
    cardDescription: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    CardFooter: {
        color: '#000000',
        fontSize: 12,
    },
})