import { View, Text, Pressable, Modal, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Link } from 'expo-router';
import { ApplicationProvider, IconRegistry, Layout, Button, Card, Input, Icon, IconElement } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as mapping } from './mapping.json';

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

  const handleEditEntry = (entry) => {
    setInputText(entry.text);
  setModalVisible(true);
  };

  const EntriesList = () => {
    console.log({ entries })

    useEffect(() => {
      const fetchEntries = async () => {

      }
    }, []);

    const PlusIcon = (props) => (
      <Icon name='plus-outline' {...props} />
    );

    return (
      <Layout level="1" style={styles.scrollViewContainer}>
        <ScrollView >
          {entries.map((entry, index) => (
            <Card style={styles.scrollViewEntries} key={index} onPress={() => handleEditEntry(entry)}>
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
            </Card>
          ))}
        </ScrollView>
        <Button status='primary' accessoryLeft={PlusIcon} style={styles.newEntryButton} onPress={handleButtonPress}>
        </Button>
      </Layout>
    );
  }

  const CheckIcon = (props) => (
    <Icon name='checkmark-outline' {...props} />
  );
  const CloseIcon = (props) => (
    <Icon name='close-outline' {...props} />
  );


  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} customMapping={mapping} theme={eva.dark}>
      <Layout style={styles.container}>
        <EntriesList />
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={handleModalClose}
        >
          <Layout level="1" style={styles.modalContainer}>
            <Layout style={styles.modalHeader}>
              <Button appearance='ghost' status='success' accessoryLeft={CheckIcon} style={styles.submitButton} onPress={handleSubmit}></Button>
              <Button appearance='ghost' status='danger' accessoryLeft={CloseIcon} style={styles.closeModal} onPress={handleModalClose}></Button>
              <View style={styles.modalHeaderText}>
                <Text style={styles.modalDateTitle}>{entryDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', weekday: 'short' }).toUpperCase()}</Text>
              </View>
            </Layout>
            <Input
              multiline={true}
              numberOfLines={22}
              style={styles.textInput}
              value={inputText}
              onChangeText={handleTextInputChange}
              placeholder="Start typing you thoughts..."
            />
          </Layout>
        </Modal>
      </Layout>
    </ApplicationProvider>
    </>
  );
}