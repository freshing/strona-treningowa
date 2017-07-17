import React from 'react';
import '../styles/footer.css';
import map from '../assets/map.svg';
import chat from '../assets/chat.svg';

module.exports = class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_navigate">
          <a className="button_navigate" href="#" onClick={onClick}>Strona główna</a>
          <a className="button_navigate" href="#" onClick={onClick}>Podstrona</a>
          <a className="button_navigate" href="#" onClick={onClick}>Podstrona</a>
          <a href="#" onClick={this.backToTop}><div className="footer--back">^</div></a>
        </div>
      </div>
    )
  }
  backToTop(event){
    event.preventDefault();
    window.scrollTo(0, 0);
  }
}

function onClick(event){
  event.preventDefault();
}
