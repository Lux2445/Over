import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstText: '',
      secondText: ''
    };
  }

  handleShowFirstTexts = () => {
    this.setState({
      firstText: 'Первый текст для первого места',
      secondText: 'Первый текст для второго места'
    });
  };

  handleShowSecondTexts = () => {
    this.setState({
      firstText: 'Второй текст для первого места',
      secondText: 'Второй текст для второго места'
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowFirstTexts}>Показать первые тексты</button>
        <button onClick={this.handleShowSecondTexts}>Показать вторые тексты</button>
        <div>
          <div>{this.state.firstText}</div>
          <div>{this.state.secondText}</div>
        </div>
      </div>
    );
  }
}

export default App;
