import React, { Component } from 'react';
import { Container, Message } from 'semantic-ui-react';

class Bugs extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Message color="teal" header="Please contact me if you find any more bugs" />
        <h1>Currently Known Bugs</h1>
        <p>The Price Graph doesn't show the correct data : This is completely at fault with the package I am using. I have no control over this, and have no idea why this is happening.</p>
        <p>Values written in the a sectors tab for buying stocks will carry on in another sector : Currently working on this</p>
      </Container>
    );
  }
}

export default Bugs;