import React from 'react';
import Main from '../Main/Main';
import Check from '../Check/Check';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 'main' // main or check
    }
  }
  changeStep = (current) => {
    this.setState({ step: current });
  }
  renderCurrentStep() {
    const { step } = this.state;
    if (step === 'main') {
      return <Main changeStep={this.changeStep} />
    }
    if (step === 'check') {
      return <Check />
    }
  }
  render() {
    return this.renderCurrentStep();
  }
}