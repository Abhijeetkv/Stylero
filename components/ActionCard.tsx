import { Linking, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>
                    What's new in javascript 21 - ES12
                </Text>
            </View>
            <Image
            source={{
                uri: 'https://blogger.googleusercontent.com/img/a/AVvXsEhoRQHzPoS5coajfpSgwt8GSCGIeArKNSMOX5I5XzVLGiHqQ4aMzWYWorGZAjM2EiSa_TmXHmBYod1mU55tImCJZwkIj16g6ZANaOXa7euoGcFSDbywxif1cdMWjfGg4TlONz6GYR-J2ZUbq8WD6mzwX-eCIuVT2NNcGK_PjDtA0zCtzdmQAvqLmOqMgci-'
            }}
            style={styles.cardImage}
            />

            <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>
                ECMAScript 2021 (ES12) introduced several enhancements to JavaScript. Key features include logical assignment operators (&&=, ||=, ??=) for concise value assignments, numeric separators (_) for better readability of large numbers, and Promise.any(), which resolves with the first fulfilled promise. 
                </Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity
                onPress={() => openWebsite('https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2021')}
                >
                    <Text>Read more</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => openWebsite('https://github.com/Abhijeetkv')}
                >
                    <Text>Follow Me mf's</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

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
    headingContainer: {
        padding: 12,
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    bodyContainer: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12

    },
    footerContainer: {
        padding: 12,
        alignItems: 'flex-end'
    }
})