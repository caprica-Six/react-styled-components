import React, { Fragment, Component } from 'react';
import './App.css';
import Button from './components/common/Button';
import { ThemeProvider } from 'styled-components';
import LightTheme from "./theme/light";
import DarkTheme from "./theme/dark";
import PasswordInput from './components/common/PasswordInput';

class App extends Component {
  state = { 
    theme: LightTheme,
    // show/hide password when typing
    showPassword: false
  };

  handleToggleTheme = () => {
    this.setState({
      theme: this.state.theme.id === 'light' ? DarkTheme : LightTheme
    })
  };

  handleTogglePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  };


  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Fragment>
          <Button onClick={this.handleToggleTheme}> Ok </Button>
          <section>
            <PasswordInput showPassword={this.state.showPassword} />
            <Button onClick={this.handleTogglePassword}>
              {this.state.showPassword ? 'Hide': 'Show'}
            </Button>
          </section>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
