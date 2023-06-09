import React, { useState } from 'react';
import { View, TextInput, Button, Text, Switch, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditEventScreen = ({ route, navigation, editEvent }) => {
  const { eventIndex, eventData } = route.params;
  const [eventName, setEventName] = useState(eventData.name);
  const [eventDescription, setEventDescription] = useState(eventData.description);
  const [eventDate, setEventDate] = useState(new Date(eventData.date));
  const [reminderEnabled, setReminderEnabled] = useState(eventData.reminder);
  const [showDatePicker, setShowDatePicker] = useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || eventDate;
    setEventDate(currentDate);
    setShowDatePicker(Platform.OS === 'ios');
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleEditEvent = () => {
    const newEvent = {
      name: eventName,
      description: eventDescription,
      date: eventDate,
      reminder: reminderEnabled
    };

    editEvent(eventIndex, newEvent);
    navigation.goBack();
  };

  return (
    <View style={styles.text}>
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
      <Button onPress={showDatepicker} title="Select date!" />
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
      <View>
        <Text style={styles.text}>Przypomnienie</Text>
        <Switch
          value={reminderEnabled}
          onValueChange={value => setReminderEnabled(value)}
        />
      </View>
      <Button title="Save" onPress={handleEditEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },

})

export default EditEventScreen;
