import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import LandingPage from './Components/LandingPage';
import textStyles from './theme/globalStyles/textStyles';
import colors from './theme/globalStyles/colors';
import buttonTheme from './theme/components/button'

function App() {

  const theme = extendTheme({
    textStyles,
    colors,
    components: { 
      Button: buttonTheme,
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <LandingPage></LandingPage>
    </ChakraProvider>
  );
}

export default App;
