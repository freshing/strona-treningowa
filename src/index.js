import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './modules/footer.js';

class App extends React.Component {
  render() {
    return (
      <Footer />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
