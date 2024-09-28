import { View, Text, Pressable, Modal, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import * as FileSystem from 'expo-file-system';
import { ApplicationProvider, IconRegistry, Layout, Button, Card, Input, Icon, IconElement } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as mapping } from './mapping.json';
import { StatusBar } from 'expo-status-bar';

export default function Mobile() {
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
        setInputText('');
    };

    const handleEditEntry = (entry) => {
      setInputText(entry.text);
    setModalVisible(true);
    };

    const EntriesList = () => {
        const [entries, setEntries] = useState([]);

        useEffect(() => {

            const cleanEntries = async (callback) => {
                const fileName = 'entries.json';
                const fileUri = `${FileSystem.documentDirectory}${fileName}`;
                try {
                    const existingData = await FileSystem.readAsStringAsync(fileUri, { encoding: 'utf8' });
                    const jsonData = JSON.parse(existingData);
                    const filteredData = jsonData.filter(entry => entry.text !== '');
                    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(filteredData), { encoding: 'utf8' });
                    callback(); // Call the callback function
                } catch (error) {
                    console.error(error);
                }
            };

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

            cleanEntries(() => {
                fetchEntries();
            });
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
            </Card>
          ))}
        </ScrollView>
        <Button status='primary' accessoryLeft={PlusIcon} style={styles.newEntryButton} onPress={handleButtonPress}>
        </Button>
      </Layout>
        );
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

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
              <Layout style={styles.modalHeaderText}>
                <Text style={styles.modalDateTitle}>{entryDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', weekday: 'short' }).toUpperCase()}</Text>
              </Layout>
            </Layout>
            <Input
            multiline={true}
            numberOfLines = {22}
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
