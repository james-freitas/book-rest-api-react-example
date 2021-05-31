import React from 'react';

import {Jumbotron} from 'react-bootstrap';

class Welcome extends React.Component {
  render() {
    return (
      <Jumbotron className="bg-dark text-white">
        <h1>Welcome to Book Shop</h1>
        <p>
          Good friends, good books and a sleepy conscience: 
          this is the ideal life.
        </p>
        <footer className="blockquote-footer">
          Mark Twain
        </footer>
      </Jumbotron>
    );
  }
}

export default Welcome;