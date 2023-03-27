import React from 'react';
import { Appbar, Avatar, TouchableRipple } from 'react-native-paper';
import { Alert, Platform } from 'react-native';

const TestHeader = () => {
  return (
        <Appbar.Header mode='center-aligned'>
        <TouchableRipple onPress={()=>{Alert.alert("Teste ícone","Testando o Touch do ícone.")}}>
          <Avatar.Text size={36} label="TT"/>
        </TouchableRipple>
        <Appbar.Content title="Title" />
        </Appbar.Header>
  );
};

export default TestHeader;