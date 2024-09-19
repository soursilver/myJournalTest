import { View, Text, Pressable, Modal, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Link } from 'expo-router';

export default function Web() {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [entries, setEntries] = useState([]);
  const entryDate = new Date();

  
  const handleButtonPress = async () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    console.log('handleModalClose called');
    setModalVisible(false);
  };

  const handleTextInputChange = (text) => {
    setInputText(text);
  };

  const handleSubmit = async () => {
    const text = inputText;
    const date = new Date();
    //add the date, the time, and the inputText to the entries array
    setEntries([...entries, { text, date: date.toISOString() }]);
    setModalVisible(false);
    setInputText('');
  };

  const EntriesList = () => {
    console.log({entries})
  
    useEffect(() => {
      const fetchEntries = async () => {

      }
    }, []);
    return (
      <View style={styles.scrollViewContainer}>
      <ScrollView >
       {entries.map((entry, index) => (
          <View style={styles.scrollViewEntries} key={index}>
            <Text style={styles.entriesTitle}>
              {new Date(entry.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', weekday: 'short' }).toUpperCase()}
            </Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>
              {new Date(entry.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </Text>
            <Text style={styles.entriesText}>
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
  }

  return (
    <View style={styles.container}>
      <EntriesList />
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Pressable style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonIcon}>+</Text>
            </Pressable>
            <Pressable style={styles.closeModal} onPress={handleModalClose}>
              <Text style={styles.closeModalIcon}>X</Text>
            </Pressable>
            <View style={styles.modalHeaderText}>
              <Text style={styles.modalDateTitle}>{entryDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', weekday: 'short' }).toUpperCase()}</Text>
            </View>
          </View>
          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={handleTextInputChange}
            placeholder="Start typing you thoughts..."
          />
        </View>
      </Modal>
    </View>
  );
}