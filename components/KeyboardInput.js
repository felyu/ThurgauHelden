import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const KeyboardInput = () => {
  const [text, setText] = useState('');

  const handleSend = () => {
    // Handle sending the message
    console.log('Sending message:', text);
    setText('');
  };

  const handlePressOutside = () => {
    // Dismiss the keyboard
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View className="flex-row items-center bg-gray-100 px-4 py-2">
        <TextInput
          className="flex-1 py-2 px-4 bg-white rounded-sm"
          placeholder="Type a message..."
          value={text}
          onChangeText={setText}
          multiline
        />
        <TouchableOpacity
          className="ml-2 rounded-full bg-green-500 p-2"
          onPress={handleSend}
          disabled={!text.trim()}
        >
        <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardInput;