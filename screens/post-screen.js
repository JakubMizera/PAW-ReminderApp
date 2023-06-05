import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PostsScreen = ({ events, navigation, deleteEvent }) => {
  return (
    <View>
      <Text style={styles.text}>Lista wydarzeń:</Text>
      {events.map((event, index) => (
        <View key={index}>
          <Text style={styles.text}>{event.name}</Text>
          <Button title="Edytuj" onPress={() => navigation.navigate('Edit', { eventIndex: index, eventData: { ...event, date: event.date.getTime() } })} />
          <Button title="Usuń" onPress={() => deleteEvent(index)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },

})

export default PostsScreen;
