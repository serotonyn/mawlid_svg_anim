import React, { Component } from 'react';
import { TweenMax, Linear } from 'gsap';
import { Input, Button } from 'react-materialize';

import { Svg } from './assets/svg.js';
import logo from './assets/logo.svg';

class App extends Component {
  state = {
    email: '',
    password: ''
  };
  handleEmailChange = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  handleEmailBlur = () => {
    if (this.state.email.length !== 0) {
      console.log('hi');
      TweenMax.to('#animPath', 1, {
        attr: {
          d: 'M236.28 345.33 L 309.28 260.33'
        }
      });
      TweenMax.to('#Layer_2', 0.4, {
        x: 50,
        y: -60,
        ease: Linear.easeNone
      });
    }
  };

  handlePasswordBlur = () => {
    if (this.state.email.length !== 0) {
      TweenMax.to('#animPath', 1, {
        attr: {
          d: 'M236.28 345.33 L 363.28 200.33'
        }
      });
      TweenMax.to('#Layer_2', 0.4, {
        x: 80,
        y: -90,
        ease: Linear.easeNone
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.email.length !== 0 && this.state.password.length !== 0) {
      TweenMax.to('#animPath', 1, {
        attr: {
          d: 'M236.28 345.33 L 540.28 0.33'
        }
      });
      TweenMax.to('#Layer_2', 0.5, {
        x: 350,
        y: -390,
        ease: Linear.easeNone
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <div className='left'>
          <img src={logo} alt='logo' id='logo' />
          <div className='left__main'>
            <h1>Get your free placeholder account now.</h1>
            <h2>Try placeholder Business free for 15 days.</h2>
            <h2>Downgrade to Basic (free forever) anytime.</h2>
            <form>
              <Input
                onChange={this.handleEmailChange}
                onBlur={this.handleEmailBlur}
              />
              <Input
                type='password'
                onChange={this.handlePasswordChange}
                onBlur={this.handlePasswordBlur}
              />
              <Button waves='light' type='submit' onClick={this.handleSubmit}>
                submit
              </Button>
            </form>
          </div>
        </div>
        <div className='right'>
          <Svg />
        </div>
      </div>
    );
  }
}

export default App;
