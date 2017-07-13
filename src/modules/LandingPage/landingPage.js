import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/landingPage.css';

module.exports = class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <LandingPageUp />
        <LandingPageDown />
      </div>
    )
  }
}

class LandingPageUp extends React.Component {
  render() {
    return (
      <div className="landing-up">
        <div className="content">
        <div className="content-title">
          Jak działamy?
        </div>
        <div className="content-text">
          Nasze to trzy wyjątkowe kobiety,
          które na co dzień pracują w Miejskim Centrum Informacji Społecznej przy
           al. Daszyńskiego 22 w Krakowie. Ich wiedza i doświadczenie są bezcenne!
           Napisz, zadzwoń lub przyjdź do naszego MCIS i przekonaj się sam!
        </div>
        <div>
          <a href="#"><div className="landing-button">SKONTAKTUJ SIĘ Z NAMI</div></a>
        </div>
      </div>
      </div>
    )
  }
}

class LandingPageDown extends React.Component {
  render() {
    return (
      <div className="landing-down">
        <div className="">
          <div>
            Dlaczego warto
            skorzystać z naszych
            usług?
          </div>
          <div>
            Lorem ipsum dolor sit amet.
          </div>
          <div>
            <a href="#"><div className="landing-button">SKONTAKTUJ SIĘ Z NAMI</div></a>
          </div>
        </div>
        <div>

        </div>
      </div>
    )
  }
}
