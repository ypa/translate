import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i className="flag us" onClick={() => this.props.onLanguageChange('english')} />
        <i className="flag mm" onClick={() => this.props.onLanguageChange('myanmar')} />
      </div>
    );
  }
}

export default LanguageSelector;
