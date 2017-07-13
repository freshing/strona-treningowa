import React from 'react';
import ReactDOM from 'react-dom';
import Header from './modules/header'
import Footer from './modules/footer';
import LandingPage from './modules/LandingPage/landingPage';
import './styles/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <LandingPage />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
