import { View, Text, Pressable, Modal, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import * as FileSystem from 'expo-file-system';
import { Link } from 'expo-router';


export default function Index() {
  return (
    <View style={styles.container}>
      <Link replace href="/mobile" asChild>
        <Pressable style={styles.defaultbutton}>
          <Text style={{color: "#F1F7FC"}}>Mobile</Text>
        </Pressable>
      </Link>
      <Link replace href="/web" asChild>
        <Pressable style={styles.defaultbutton}>
          <Text style={{color: "#F1F7FC"}}>Web</Text>
        </Pressable>
      </Link>
    </View>
    
  );
}
