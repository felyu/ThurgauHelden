import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import RootNavigation from './navigation/index.js';
import {chivo} from './styles/font.js';

export default function App() {
  // Import custom fonts
  // Reload the app whem modifiying
  const [loaded] = useFonts({
    'chivo-regular': require('./assets/fonts/chivo/Chivo-Regular.ttf'),
    'chivo': require('./assets/fonts/chivo/Chivo-Bold.ttf'),
    'chivo-black': require('./assets/fonts/chivo/Chivo-Black.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <RootNavigation/>
  );
}