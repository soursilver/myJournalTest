import { View, Text, Pressable, Modal, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import * as FileSystem from 'expo-file-system';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [entries, setEntries] = useState([]);

  const handleButtonPress = async () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleTextInputChange = (text) => {
    setInputText(text);
  };

  const handleSubmit = async () => {
    const text = inputText;
    const date = new Date();
    const fileName = 'entries.json';
    
    const fileUri = `${FileSystem.documentDirectory}${fileName}`;
    
    try {
      const existingData = await FileSystem.readAsStringAsync(fileUri, { encoding: 'utf8' });
      const jsonData = JSON.parse(existingData);
      jsonData.push({ text, date: date.toISOString() });
      jsonData.sort((a, b) => new Date(b.date) - new Date(a.date)); // sort in descending order by date
      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(jsonData), { encoding: 'utf8' });
    } catch (error) {
      // If the file doesn't exist, create it with the initial data
      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify([{ text, date: date.toISOString() }]), { encoding: 'utf8' });
      setEntries([{ text, date: date.toISOString() }]); // update the entries state with the initial entry
    }
    
    setModalVisible(false);
  };

  const EntriesList = () => {
    const [entries, setEntries] = useState([]);
  
    useEffect(() => {
      const fetchEntries = async () => {
        const fileName = 'entries.json';
        const fileUri = `${FileSystem.documentDirectory}${fileName}`;
        try {
          const existingData = await FileSystem.readAsStringAsync(fileUri, { encoding: 'utf8' });
          const jsonData = JSON.parse(existingData);
          jsonData.sort((a, b) => new Date(b.date) - new Date(a.date)); // sort in descending order by date
          setEntries(jsonData);
        } catch (error) {
          // If the file doesn't exist, set the entries state to an empty array
          setEntries([]);
        }
      };
  
      fetchEntries();
    }, []);
  
    return (
      <View style={styles.scrollViewContainer}>
      <ScrollView style={styles.entriesView}>
       {entries.map((entry, index) => (
          <View style={styles.scrollViewEntries} key={index}>
            <Text style={styles.entriesTitle}>
              {new Date(entry.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', weekday: 'short' }).toUpperCase()}
            </Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>
              {new Date(entry.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </Text>
            <Text style={{ fontSize: 16 }}>
              {entry.text}
            </Text>
            <View style={{ height: 10 }} />
          </View>
        ))}
      </ScrollView>
      <Pressable style={styles.newEntryButton} onPress={handleButtonPress}>
        <Text style={styles.entryButtonText} >+</Text>
      </Pressable>
      </View>
    );
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <View style={styles.container}>
      <EntriesList />
      <Modal
        style={styles.modalContent}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleModalClose}
      >
        <View style={styles.container}>
          <TextInput
          style={styles.textInput}
            value={inputText}
            onChangeText={handleTextInputChange}
            placeholder="Type something..."
          />
          <Pressable onPress={handleSubmit}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
