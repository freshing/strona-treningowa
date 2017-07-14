import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/content.css';

module.exports = class Content extends React.Component {
  render() {
    return (
      <div className="landing-down">
        <div className="landing-down_element">
          <div>
            Dlaczego warto
            skorzystać z naszych
            usług?
          </div>
          <div>
            Lorem ipsum dolor sit amet.
          </div>
          <div>
            <a href="#" onClick={onClick}><div className="landing-button">SKONTAKTUJ SIĘ Z NAMI</div></a>
          </div>
        </div>
        <div className="landing-down_element">

        </div>
      </div>
    )
  }
}

function onClick(event){
  event.preventDefault();
}
