import React from 'react';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const TestHeader = () => {
  return (
    <SafeAreaProvider>
        <Appbar.Header>
        <Appbar.Content title="Title" />
        </Appbar.Header>
    </SafeAreaProvider>
  );
};

export default TestHeader;