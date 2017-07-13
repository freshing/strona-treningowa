import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/footer.css';

module.exports = class Footer extends React.Component {
  render() {
    return (
      <div>
        <FooterUp />
        <FooterMid />
        <FooterDown />
      </div>
    )
  }
}

class FooterUp extends React.Component {
  render() {
    return (
      <div className="footer-up">
      </div>
    )
  }
}

class FooterMid extends React.Component {
  render() {
    return (
      <div className="footer-mid">
      </div>
    )
  }
}

class FooterDown extends React.Component {
  render() {
    return (
      <div className="footer-down">
      </div>
    )
  }
}
