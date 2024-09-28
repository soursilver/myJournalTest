import React from 'react';
import { View, Pressable} from 'react-native';
import styles from './styles';
import { Link } from 'expo-router';
import { ApplicationProvider, Layout, Text, Button, Card } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as mapping } from './mapping.json';

export default function Index() {

  return (
    <ApplicationProvider {...eva} customMapping={mapping} theme={eva.dark}>
      <Layout style={styles.indexContainer} Level="2">
        <Card>
      <Link replace href="/web" asChild>
        <Button appearance='filled' size='large' status="success">
          Web
        </Button>
        </Link>
        </Card>
        <Card>
          <Link replace href="/mobile" asChild>
          <Button appearance='filled' size='large' status="danger">
            Mobile
          </Button>
          </Link>
        </Card>
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
