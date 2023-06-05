import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import EventForm from '../components/EventForm';

const HomeScreen = ({ navigation, addEvent }) => {
  return (
    <View style={styles.gap} >
      <Button style={styles.text}
        title="Przejdź do listy wydarzeń"
        onPress={() => navigation.navigate('Posts')}
      />
      <EventForm  addEvent={addEvent} />

      <Button
        title="Ustawienia"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="O aplikacji"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gap: {
    gap: 10
  },
  text: {
    fontSize: 30,
    backgroundColor: 'red',
  }

})

export default HomeScreen;
