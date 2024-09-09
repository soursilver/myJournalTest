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
      <ScrollView style={styles.entriesView}>
        {entries.map((entry, index) => (
          <View key={index} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{entry.text}</Text>
            <Text style={{ fontSize: 14, color: '#666' }}>{formatDate(entry.date)}</Text>
          </View>
        ))}
      </ScrollView>
    );
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    
    <View style={styles.container}>
      <EntriesList />
      <Pressable style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>New Entry</Text>
      </Pressable>
      <Modal
        style={styles.modalContent}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleModalClose}
      >
        <View style={styles.container}>
          <Text>Enter some text:</Text>
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
