import React from 'react';
import { Appbar } from 'react-native-paper';
import NotaScreen from '../view/notaScreen';

const TestHeader = () => {
  return (
        <Appbar.Header mode='center-aligned'>
        <Appbar.Content title="Title" />
        </Appbar.Header>
  );
};

export default TestHeader;