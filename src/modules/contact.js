import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/contact.css';
import map from '../assets/map.svg';
import chat from '../assets/chat.svg';

module.exports = class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact_column">
          <div className="contact_column--title">
            Odwiedź nas w biurze
          </div>
          Odwiedź nas w naszej siedzibie, gdzie oferujemy rozmowę w cztery oczy,
          100% poufność powierzonych informacji i pełną dyskrecję.
          <br/><br/>
          <b>al. Daszyńskiego 22<br/>
          31-537 Kraków,</b>
          <br/><br/>
          czynne w godzinach:<br/>
          10.00 - 18.00 - poniedziałki, środy<br/>
          9.00 - 17.00 - wtorki, czwartki, piątki
          <div>
            <br/><br/>
            <b>ZOBACZ MAPĘ</b>
            <a href="#" onClick={onClick}><img src={map} /></a>
          </div>
        </div>
        <div className="contact_column">
          <div className="contact_column--title">
            Napisz do nas już teraz na czacie online!
          </div>
          Spróbuj nazwać swój problem. Pomoże Ci w tym bardzo krótki formularz dzięki,
          któremu będziemy mogli wybrać jedną z trzech Radczyń, która następnie udzieli Ci szczegółowych informacji.
          <br/><br/>
          To bardzo proste, wystarczy kliknąć w poniższy link a nasz system sam Cię poprowadzi!
          <div>
            <br/><br/>
            <b>ROZPOCZNIJ CZAT</b>
            <a href="#" onClick={onClick}><img src={chat} /></a>
          </div>
        </div>
        <div className="contact_column">
          <div className="contact_column--title">
            Zadzwoń lub wyślij wiadomość
          </div>
          Zadzwoń do nas albo napisz maila. Nie musisz podawać swoich danych osobowych! Wystarczy, że zapytasz, a my udzielimy Ci informacji.
          <div className="contact_column--contact">
            <br/><br/>
            <b>tel. 507-959- 548<br/>
            tel. 728-352- 126</b>
            <br/><br/>
            biuro@mcis.pl
          </div>
        </div>
      </div>
    )
  }
}

function onClick(event){
  event.preventDefault();
}
