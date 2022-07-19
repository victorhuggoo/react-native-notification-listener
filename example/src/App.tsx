import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, sum, min, fullName } from 'react-native-notification-listener';

export default function App() {
  const [sumResult, setSumResult] = React.useState<number | undefined>();
  const [minResult, setMinResult] = React.useState<number | undefined>();
  const [result, setResult] = React.useState<number | undefined>();
  const [fullNameRes, setFullNameRes] = React.useState<string | undefined>();

  React.useEffect(() => {
    sum(10, 10).then(setSumResult)
    multiply(2, 2).then(setResult);
    min(22, 9).then(setMinResult);
    fullName("Carlos Eduardo").then(setFullNameRes)
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>Result: {sumResult}</Text>
      <Text>Result: {minResult}</Text>
      <Text>Result: {fullNameRes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
