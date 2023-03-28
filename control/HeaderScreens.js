import React from 'react';
import { Appbar, Avatar, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const TestHeader = () => {
  const navigation = useNavigation();
  return (
        <Appbar.Header mode='center-aligned'>
        <TouchableRipple onPress={()=> navigation.navigate('userScreen', {name: 'userScreen'})}>
          <Avatar.Text size={48} label="TT"/>
        </TouchableRipple>
        <Appbar.Content title="Title" />
        </Appbar.Header>
  );
};

export default TestHeader;