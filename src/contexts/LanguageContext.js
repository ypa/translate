import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState( { language });
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        // Wrapping the children components with the context provider so that
        // they all can access the context object passsed in value prop.
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
