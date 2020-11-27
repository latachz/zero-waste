import 'react-native-gesture-handler';
import * as React from 'react';

import Navigation from './src/navigation';
import Providers from './src/Provider';

export default function App() {
  return (
    <Providers>
      <Navigation />
    </Providers>
  );
}
