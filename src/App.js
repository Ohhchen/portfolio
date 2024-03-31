import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import LandingPage from './Components/LandingPage';
import textStyles from './theme/globalStyles/textStyles';
import colors from './theme/globalStyles/colors';
import buttonTheme from './theme/components/button'
import { listTheme } from './theme/components/list'
import { cardTheme } from './theme/components/card';

function App() {

  const theme = extendTheme({
    textStyles,
    colors,
    components: {
      Button: buttonTheme,
      List: listTheme,
      Card: cardTheme
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <div className='App'>
        <LandingPage></LandingPage>
      </div>
    </ChakraProvider>
  );
}

export default App;
