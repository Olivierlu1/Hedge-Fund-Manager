import React, { Component } from 'react';
import { Grid, Container, Header, Form, Input, Button, Message } from 'semantic-ui-react';
import { connect } from "react-redux";
import { hireClothingFive } from '../../actions/clothing';
import { castToDollar, defaultMessage, notHiredMessage, hiredMessage, noUpcomingEventMessage } from '../../functions';
import { subtractNetWorth, addEvent, updateNetCash } from "../../actions/index";
import { insiderHired } from '../../actions/changegame';
import { Link } from 'react-router-dom';

class InformantFiveClothing extends Component {

  state = {
    price: 200000,
    error: false,
  }

  onHire = () => {
    if (this.state.price > this.props.stats.netWorth || this.props.clothing.five.willHire == true) {
      this.setState({ error: true });
    } else {
      this.props.subtractNetWorth(this.state.price);
      this.props.hireClothingFive();
      this.props.updateNetCash(this.props.stats.netCash - this.state.price);
      this.props.addEvent({ title: `Hired Olivier`, description: "Hired Clothing Informant Level 5"});
      this.props.insiderHired(5);
    }
  }

  componentWillUnmount() {
    this.setState({ error: false });
  }

  renderInformation() {
    return (
      <Container textAlign="center" fluid style={{padding: "30px"}}>
        <Header as="h3">Olivier Gabison</Header>
        <h5>Age: 25</h5>
        <h5>Price: ${castToDollar(this.state.price)}</h5>
        <Link to="/insidertrading">
          <Button basic color="grey" style={{ marginTop: "8px" }}>
              Back
          </Button>
        </Link>
      </Container>
    );
  }

  renderInsiderInformation() {
    const {
      index,
      events,
      round
    } = this.props.clothingEvent;

    let message;

    if (this.props.clothing.five.isHired == true) {
      message = defaultMessage;
    } else if (this.props.clothing.five.willHire == true) {
      message = hiredMessage;
    } else {
      message = notHiredMessage;
    }

    const holder = events[index].random <= 0.8 && this.props.clothing.five.isHired && round < events[index].eventRound ? events[index].news : message;
    let temp;
    if (events[index].random <= 0.8 && this.props.clothing.five.isHired && round >= events[index].eventRound) {
      temp = noUpcomingEventMessage;
    } else {
      temp = holder;
    }

    return (
      <Container style={{ marginTop: "20px" }}>
        <h3>Insider Information</h3>
        <p>{temp}</p>
        <br /><br /><br />
        <Button basic color="teal" onClick={this.onHire} disabled={this.props.clothing.five.willHire}>
            Hire
        </Button>
      </Container>
    );
  }

  render() {
    return (
      <div>
        { this.state.error && 
        <Message error header="Insufficent Funds" content="You don't have enough money to hire this informant!" />
        }
        { this.state.error && 
        <Message error header="Insufficent Funds" content="You don't have enough money to hire this informant!" />
        }
        {
          this.props.clothing.five.willHire &&
          <Message positive header="Successfully Hired Olivier Gabison" />
        }
        <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                {this.renderInformation()}
              </Grid.Column>
              <Grid.Column width={8}>
                {this.renderInsiderInformation()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { clothing: state.insiderClothing, clothingMessage: state.clothingMessage, stats: state.stats, clothingEvent: state.clothingEvent };
};

export default connect(
  mapStateToProps,
  { hireClothingFive, subtractNetWorth, addEvent, insiderHired, updateNetCash }
)(InformantFiveClothing);
