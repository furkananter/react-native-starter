import { StatusBar} from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.paragraph}>
          This is a simple React Native app.
        </Text>
        <Text style={styles.paragraph}>
          It is a simple React Native app.
        </Text>
      </ScrollView>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 100,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  ScrollView: {
    width: '100%',
  },
});
