import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/content.css';

module.exports = class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="content_container">
          <div>
            Dlaczego warto
            skorzystać z naszych
            usług?
          </div>
          <div>
            Lorem ipsum dolor sit amet.
          </div>
          <div>
            <a href="#" onClick={this.props.onClick}><div className="button_contact button_contact--dark">SKONTAKTUJ SIĘ Z NAMI</div></a>
          </div>
        </div>
        <div className="content_container">
          <div className="content_element">1 Poufoność powierzonych informacji</div>
          <div className="content_element">2 Wrażliwość i pełne zrozumienie Twojej sytuacji</div>
          <div className="content_element">3 Bezpłatność porad</div>
          <div className="content_element">4 Bezstronność doradców i nieocenianie klienta</div>
          <div className="content_element">5 Niezależność i kierowanie się Twoim dobrem</div>
          <div className="content_element">6 Samodzielność klienta w podejmowaniu ostatecznych decyzji</div>
          <div className="content_element">7 Otwartość na każdą osobę potrzebującą porady</div>
          <div className="content_element">8 Aktualność i rzetelność informacji na temat obowiązujących przepisów oraz oferty instytucji i organizacji działających na rzecz obywateli</div>
        </div>
      </div>
    )
  }
}
