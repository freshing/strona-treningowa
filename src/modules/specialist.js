import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/specialist.css';

module.exports = class Specialist extends React.Component {
  render() {
    return (
      <div className="specialist">
          Poznaj nasze <span className="snickles snickles--light">SuperSpecjalistki</span>
        <div>
          <div className="specialist_description">
            Posiada wieloletnie doświadczenie w pracy z osobami niepełnosprawnymi
            i na rzecz osób z niepełnosprawnościami. Uczestniczyła w różnych kursach
            i szkoleniach m.in. dla pracowników ośrodków informacji dla osób
          </div>
          <div className="specialist_description">
            niepełnosprawnych  oraz dla przedstawicieli organizacji pozarządowych.
            Jest otwarta na kontakt z każdym klientem. Posiada osobiste i życiowe
            doświadczenie funkcjonowania z niepełnosprawnością.
          </div>
        </div>
        <div >
          <a href="#" className="button_contact button_contact--light" onClick={this.props.onClick}><div >SKONTAKTUJ SIĘ Z NAMI</div></a>
        </div>
      </div>
    )
  }
}
