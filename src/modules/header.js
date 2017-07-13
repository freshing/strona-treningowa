import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/header.css';

module.exports = class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="buttons">
          <a className="button-navigate" href="#">Strona główna</a>
          <a className="button-navigate" href="#">Podstrona</a>
          <a className="button-navigate" href="#">Podstrona</a>
        </div>
        <div className="header-space">
        </div>
        <div className="header-text-big">
          Miejskie Centrum Informacji Społecznej w Krakowie
        </div>
        <div className="header-text-small">
          miejsce, w którym uzyskasz informację i pomoc w zakresie szeroko rozumianej polityki społecznej.
        </div>
      </div>
    )
  }
}
