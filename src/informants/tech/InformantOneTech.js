import React, { Component } from 'react';
import { Grid, Container, Header, Form, Input, Button, Message, Popup } from 'semantic-ui-react';
import { connect } from "react-redux";
import { hireTechOne } from '../../actions/tech';
import { castToDollar, defaultMessage, notHiredMessage, hiredMessage, noUpcomingEventMessage } from '../../functions';
import { subtractNetWorth, addEvent, updateNetCash } from "../../actions/index";
import { insiderHired } from '../../actions/changegame';
import { Link } from 'react-router-dom';

class InformantOneTech extends Component {

  state = {
    price: 6000,
    error: false,
  }

  onHire = () => {
    if (this.state.price > this.props.stats.netWorth || this.props.tech.one.willHire == true) {
      this.setState({ error: true });
    } else {
      this.props.subtractNetWorth(this.state.price);
      this.props.hireTechOne();
      this.props.insiderHired(1);
      this.props.updateNetCash(this.props.stats.netCash - this.state.price);
      this.props.addEvent({ title: `Hired Waldeburg`, description: "Hired Tech Informant Level 1"});
    }
  }

  componentWillUnmount() {
    this.setState({ error: false });
  }

  renderInformation() {
    return (
      <Container textAlign="center" fluid style={{padding: "30px"}}>
        <Header as="h3">Waldeburg Judah</Header>
        <h5>Age: 37</h5>
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
    } = this.props.techEvent;

    let message;

    if (this.props.tech.one.isHired == true) {
      message = defaultMessage;
    } else if (this.props.tech.one.willHire == true) {
      message = hiredMessage;
    } else {
      message = notHiredMessage;
    }

    const holder = events[index].random <= 0.2 && this.props.tech.one.isHired && round < events[index].eventRound ? events[index].news : message;
    let temp;
    if (events[index].random <= 0.2 && this.props.tech.one.isHired && round >= events[index].eventRound) {
      temp = noUpcomingEventMessage;
    } else {
      temp = holder;
    }

    return (
      <Container style={{ marginTop: "20px" }}>
        <h3>Insider Information</h3>
        <p>{temp}</p>
        <br /><br /><br />
        <Button basic size="medium" color="teal" onClick={this.onHire} disabled={this.props.tech.one.willHire}>
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
        {
          this.props.tech.one.willHire &&
          <Message positive header="Successfully Hired Waldeburg Judah" />
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
  return { tech: state.insiderTech, techMessage: state.techMessage,
  stats: state.stats, techEvent: state.techEvent };
};

export default connect(
  mapStateToProps,
  { hireTechOne, subtractNetWorth, addEvent, insiderHired, updateNetCash }
)(InformantOneTech);