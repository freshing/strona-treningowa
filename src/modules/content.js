import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/content.css';

module.exports = class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="content_container">
          <div className="content_question">
            Dlaczego warto
            skorzystać z naszych
            usług?
          </div>
          <div className="content_description">
            Lorem ipsum dolor sit amet.
          </div>
          <div>
            <a href="#" onClick={this.props.onClick}><div className="button_contact button_contact--dark">SKONTAKTUJ SIĘ Z NAMI</div></a>
          </div>
        </div>
        <div className="content_container">
          <div className="content_element"><div className="content_element--number">1</div>
          <div className="content_element--text">Poufoność powierzonych informacji</div></div>
          <div className="content_element"><div className="content_element--number">2</div>
          <div className="content_element--text">Wrażliwość i pełne zrozumienie Twojej sytuacji</div></div>
          <div className="content_element"><div className="content_element--number">3</div>
          <div className="content_element--text">Bezpłatność porad</div></div>
          <div className="content_element"><div className="content_element--number">4</div>
          <span className="content_element--text">Bezstronność doradców i nieocenianie klienta</span></div>
          <div className="content_element"><div className="content_element--number">5</div>
          <span className="content_element--text">Niezależność i kierowanie się Twoim dobrem</span></div>
          <div className="content_element"><div className="content_element--number">6</div>
          <span className="content_element--text">Samodzielność klienta w podejmowaniu ostatecznych decyzji</span></div>
          <div className="content_element"><div className="content_element--number">7</div>
          <span className="content_element--text">Otwartość na każdą osobę potrzebującą porady</span></div>
          <div className="content_element"><div className="content_element--number">8</div>
          <span className="content_element--text">Aktualność i rzetelność informacji na temat obowiązujących przepisów oraz oferty instytucji
          i organizacji działających na rzecz obywateli</span></div>
        </div>
      </div>
    )
  }
}
