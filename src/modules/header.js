import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/header.css';
import search from '../assets/search.svg';

module.exports = class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="buttons">
          <a className="button-navigate" href="#">Strona główna</a>
          <a className="button-navigate" href="#">Podstrona</a>
          <a className="button-navigate" href="#">Podstrona</a>
          <a className="button-navigate" href="#"><img src={search} /></a>
        </div>
        <div className="header-space">
        </div>
        <div className="header-text header-text--big">
          Miejskie Centrum Informacji Społecznej w Krakowie
        </div>
        <div className="header-text header-text--small">
          miejsce, w którym uzyskasz informację i pomoc w zakresie szeroko rozumianej polityki społecznej.
        </div>
        <a href="#"><div className="header_button">SKONTAKTUJ SIĘ Z NAMI</div></a>
      </div>
    )
  }
}
