import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/header.css';
import search from '../assets/search.svg';

module.exports = class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header_navigate">
          <a className="button_navigate" href="#">Strona główna</a>
          <a className="button_navigate" href="#">Podstrona</a>
          <a className="button_navigate" href="#">Podstrona</a>
          <a className="button_navigate" href="#"><img src={search} /></a>
        </div>
        <div className="header_text">
          <div className="header_text header_text--big">
            Miejskie Centrum Informacji Społecznej w Krakowie
          </div>
          <div className="header_text header_text--small">
            miejsce, w którym uzyskasz informację i pomoc w zakresie szeroko rozumianej polityki społecznej.
          </div>
          <a href="#" onClick={this.props.onClick}><div className="button_contact button_contact--light">SKONTAKTUJ SIĘ Z NAMI</div></a>
        </div>
      </div>
    )
  }
}
