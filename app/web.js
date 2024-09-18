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
    setModalVisible(false);
  };

  const handleTextInputChange = (text) => {
    setInputText(text);
  };

  const handleSubmit = async () => {
    const text = inputText;
    const date = new Date();
    
    setModalVisible(false);
    setInputText('');
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Pressable style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonIcon}>Done</Text>
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
      <Pressable style={styles.newEntryButton} onPress={handleButtonPress}>
        <Text style={styles.entryButtonText} >+</Text>
      </Pressable>
      <Link href="/" asChild>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
    </Link>
    </View>
  );
}