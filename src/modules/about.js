import React from 'react';
import '../styles/about.css';

module.exports = class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about_content">
        <div className="about_content--title">
          Jak działamy?
        </div>
        <div className="about_content--text">
          Nasze <span className="snickles snickles--dark">SuperSpecjalistki</span> to trzy wyjątkowe kobiety,
          które na co dzień pracują w Miejskim Centrum Informacji Społecznej przy
           al. Daszyńskiego 22 w Krakowie. Ich wiedza i doświadczenie są bezcenne!
           Napisz, zadzwoń lub przyjdź do naszego MCIS i przekonaj się sam!
        </div>
        <div>
          <a href="#" onClick={this.props.onClick}><div className="button_contact button_contact--dark">SKONTAKTUJ SIĘ Z NAMI</div></a>
        </div>
      </div>
      </div>
    )
  }
}
