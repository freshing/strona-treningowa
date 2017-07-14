import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/footer.css';
import map from '../assets/map.svg';
import chat from '../assets/chat.svg';

module.exports = class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
          <a className="button-navigate" href="#" onClick={onClick}>Strona główna</a>
          <a className="button-navigate" href="#" onClick={onClick}>Podstrona</a>
          <a className="button-navigate" href="#" onClick={onClick}>Podstrona</a>
          <a className="footer--back" href="#" onClick={onClick}>A</a>
      </div>
    )
  }
}

function onClick(event){
  event.preventDefault();
}
