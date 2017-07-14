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
        <Header />
        <About />
        <Content />
        <Specialist />
        <Contact />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
