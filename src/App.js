/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import valley from './photos/valley.jpg';
import Clock from './components/Clock';
import FocusForm from './components/FocusForm';
import Focus from './components/Focus';
import Welcome from './components/Welcome';


class App extends React.Component {

  state = {
    currentUser: '',
    mainFocus: '',
    promptUserName: false,
  }

  retreiveUser = () => {
    const isReturningUser = JSON.parse(localStorage.getItem('impetus'));
    if (isReturningUser) {
      this.setState({currentUser: isReturningUser.user});
    } else {
      this.setState({promptUserName: true});
    }
  }

  setUser = name => {
    const user = { name };
    localStorage.setItem('impetus', user);
    this.setState({
      currentUser: user,
      promptUserName: false,
    });
  }

  setMainFocus = mainFocus => {
    this.setState({ mainFocus })
  }

  componentDidMount() {
    this.retreiveUser();
  }


  renderFocusForm() {
    if (this.state.promptUserName) {
      return null;
    } 
    return this.state.mainFocus ? <Focus mainFocus={this.state.mainFocus} setMainFocus={this.setMainFocus} /> : <FocusForm setMainFocus={this.setMainFocus} />
  }

  render() {
    return (
      <div>
        <div id="sub-container">
          <img className="background-image" src={valley} />
        </div>
        <div id="top-container">
          {this.state.promptUserName ? <Welcome setUser={this.setUser} /> : <Clock currentUser={this.state.currentUser} />}
          {this.renderFocusForm()}
        </div>
      </div>
    )
  }
}

export default App;
