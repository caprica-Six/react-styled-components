import React, { Component } from 'react';
import './App.css';
import Button from './components/common/Button';
import styled, { ThemeProvider } from 'styled-components';
import LightTheme from './theme/light';
import DarkTheme from './theme/dark';
import PasswordInput from './components/common/PasswordInput';
import { Button as ReactstrapButton } from 'reactstrap';
import PrimaryButton from './components/common/PrimaryButton';
import Spinner from './components/common/Spinner';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => (props.theme.id === 'light' ? 'Arial' : 'Times New Roman')} !important;
  }
`;
const ButtonWrapper = styled.div`padding: 16px 0;`;

const AppWrapper = styled.main`
  display: flex;
  max-width: 80%;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
  background: ${(props) => props.theme.backgroundColor}
  color: ${(props) => props.theme.primaryColor}
`;

/* Overrride Reactstrap button, to avoid use of !important!! */
const ReactstrapRoundedButton = styled(ReactstrapButton)`
  &.btn {
    padding: 10px 25px;
    border-radius: 100px;
  }
`;
const FacebookButton = styled(Button)`
  border: none;
  background: #3b5998;
  color: white;
`;

class App extends Component {
	state = {
		theme: LightTheme,
		// show/hide password when typing
		showPassword: false
	};

	handleToggleTheme = () => {
		this.setState({
			theme: this.state.theme.id === 'light' ? DarkTheme : LightTheme
		});
	};

	handleTogglePassword = () => {
		this.setState({
			showPassword: !this.state.showPassword
		});
	};

	render() {
		return (
			<ThemeProvider theme={this.state.theme}>
				<AppWrapper>
					<h1>React Styled Components</h1>
					<Button onClick={this.handleToggleTheme}> Ok </Button>
					<section>
						<PasswordInput showPassword={this.state.showPassword} />
						<Button onClick={this.handleTogglePassword}>{this.state.showPassword ? 'Hide' : 'Show'}</Button>
					</section>

					{/* ReactStrap buttons */}
					<ButtonWrapper>
						<Button color="primary">primary</Button>
					</ButtonWrapper>
					<ButtonWrapper>
						<PrimaryButton>custom button</PrimaryButton>
					</ButtonWrapper>
					<ButtonWrapper>
						<ReactstrapButton color="info">reactstrap button</ReactstrapButton>
					</ButtonWrapper>
					<ButtonWrapper>
						<ReactstrapRoundedButton color="primary">existing component</ReactstrapRoundedButton>
					</ButtonWrapper>
					<ButtonWrapper>
						<FacebookButton>Facebook button</FacebookButton>
					</ButtonWrapper>

					<h2>Spinner</h2>
					<Spinner />
					<GlobalStyle />
				</AppWrapper>
			</ThemeProvider>
		);
	}
}

export default App;
