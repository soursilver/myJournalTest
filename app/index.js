import React from 'react';
import { View, Pressable} from 'react-native';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import styles from './styles';
import { Link } from 'expo-router';
// 1. import `NativeBaseProvider` component



export default function Index() {

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout>
        <Button appearance='filled'>
          BUTTON
        </Button>
      </Layout>
    </ApplicationProvider>
  
    /*<View style={styles.container}>
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
    </View>*/
  );
}
