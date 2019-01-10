import React, { Component } from 'react';
import './App.css';
import Button from './components/common/Button';
import { ThemeProvider } from 'styled-components';
import LightTheme from "./theme/light";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={LightTheme}>
        <Button> Ok </Button>
      </ThemeProvider>
    );
  }
}

export default App;
