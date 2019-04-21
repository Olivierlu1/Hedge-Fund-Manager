import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { castToDollar } from './functions';

class GameOver extends Component {
  render() {
    var text;
    if (this.props.stats.netWorth <= 0) {
      text = "You ran out of money!";
    } else {
      text = "The cops caught you!";
    }

    return (
      <Container text textAlign="center">
        <h1>Thanks for Playing!</h1>
        <h4>You unfortunately lost.</h4>
        <p>{text}</p>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { stats: state.stats };
};

export default connect(
  mapStateToProps
)(GameOver);