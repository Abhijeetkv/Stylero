import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
        const contacts = [
          {
            uid: 1,
            name: 'Abhijeet Verma',
            status: 'Exploring the wonders of AI',
            imageUrl: 'https://avatars.githubusercontent.com/u/142344752?v=4',
          },
          {
            uid: 2,
            name: 'Jane Smith',
            status: 'Developing next-gen software solutions',
            imageUrl: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
          },
          {
            uid: 3,
            name: 'Michael Brown',
            status: 'Passionate about cybersecurity',
            imageUrl: 'https://avatars.githubusercontent.com/u/13579246?v=4',
          },
          {
            uid: 4,
            name: 'Emily White',
            status: 'Designing intuitive user interfaces',
            imageUrl: 'https://avatars.githubusercontent.com/u/24681357?v=4',
          },
          {
            uid: 5,
            name: 'Chris Green',
            status: 'Building scalable cloud systems',
            imageUrl: 'https://avatars.githubusercontent.com/u/19283746?v=4',
          },
          {
            uid: 6,
            name: 'Alex Blue',
            status: 'Advancing digital banking technologies',
            imageUrl: 'https://avatars.githubusercontent.com/u/98765432?v=4',
          },
          
        ];
        
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}>
          {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                style={styles.userImage}
                source={{
                  uri: imageUrl
                }}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
          ))}
      </ScrollView>
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
  container: {
    margin: 6,
    borderRadius: 10,
    marginBottom: 4
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    marginBottom: 4,
    backgroundColor: '#8D3DAF'
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 14
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  userStatus: {
    fontSize: 16
  }
})