import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <AppNavigator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
