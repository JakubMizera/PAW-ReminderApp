import React, { useState } from 'react';
import { View, TextInput, Button, Text, Switch, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EventForm = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || eventDate;
    setEventDate(currentDate);
    setShowDatePicker(Platform.OS === 'ios');
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleSaveEvent = () => {
    const event = {
      name: eventName,
      description: eventDescription,
      date: eventDate,
      reminder: reminderEnabled
    };

    addEvent(event);
    setEventName('');
    setEventDescription('');
    setEventDate(new Date());
    setReminderEnabled(false);
  };

  return (
    <View>
      <TextInput style={styles.text}
        placeholder="Nazwa wydarzenia"
        value={eventName}
        onChangeText={text => setEventName(text)}
      />
      <TextInput style={styles.text}
        placeholder="Opis wydarzenia"
        value={eventDescription}
        onChangeText={text => setEventDescription(text)}
      />
      <Button onPress={showDatepicker} title="Wybierz datę" />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={eventDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={styles.switch}>
        <Text style={styles.text}>Powiadom mnie</Text>
        <Switch
          value={reminderEnabled}
          onValueChange={value => setReminderEnabled(value)}
        />
      </View>
      <Button title="Dodaj" onPress={handleSaveEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  switch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default EventForm;
