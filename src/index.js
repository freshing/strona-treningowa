import React from 'react';
import ReactDOM from 'react-dom';
import Header from './modules/header'
import About from './modules/about';
import Content from './modules/content';
import Specialist from './modules/specialist';
import Contact from './modules/contact';
import Footer from './modules/footer';

import './styles/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header onClick={this.onClick} />
        <About onClick={this.onClick} />
        <Content onClick={this.onClick} />
        <Specialist onClick={this.onClick} />
        <Contact />
        <Footer />
      </div>
    )
  }
  onClick(event){
    event.preventDefault();
    var element = document.getElementsByClassName("contact");
    window.scrollTo(0, element[0].offsetTop);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
