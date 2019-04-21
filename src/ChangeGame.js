import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Button, Segment, Card, Message } from 'semantic-ui-react';
import { addNetWorth, subtractNetWorth, addEvent, updateNetCash } from "./actions/index";
import { castToDollar } from './functions';
import { buyCop, buyCharity } from './actions/changegame';

class ChangeGame extends Component {

  state = {
    errorCharity: false,
    errorCops: false
  }

  buttonClick = (index, type) => {
    this.setState({ errorCharity: false, errorCops: false });
    var amount;
    if (type === "charity") {
      amount = this.props.charity.events[index].price;
      if (amount > this.props.stats.netWorth) {
        this.setState({ errorCharity: true })
      } else {
        this.props.subtractNetWorth(amount);
        this.props.buyCharity(index + 1);
        this.props.updateNetCash(this.props.stats.netCash - amount);
      }  
    } 
    
    if (type === "cops") {
      amount = this.props.cops.events[index].price;
      if (amount > this.props.stats.netWorth) {
        this.setState({ errorCops: true });
      } else {
        this.props.subtractNetWorth(amount);
        this.props.buyCop(index + 1);
        this.props.updateNetCash(this.props.stats.netCash - amount);
      }
    }
    
    this.forceUpdate();
  }

  renderButton = (index, type) => {
    var name;
    if (type == "charity") {
      name = "Donate";
    }

    if (type == "cops") {
      name = "Pay Off";
    }    
    return <Button fluid onClick={() => this.buttonClick(index, type)}>{name}</Button>;
  }

  renderCopsCards() {
    const {
      cops
    } = this.props;

    const { 
      events,
    } = cops;

    var price1 = `Price: $${castToDollar(events[0].price)} | Decreases criminal level by 1%`;
    var description1 = events[0].description;

    var price2 = `Price: $${castToDollar(events[1].price)} | Decreases criminal level by 3%`;
    var description2 = events[1].description;

    var price3 = `Price: $${castToDollar(events[2].price)} | Decreases criminal level by 5%`;
    var description3 = events[2].description;

    var price4 = `Price: $${castToDollar(events[3].price)} | Decreases criminal level by 9%`;
    var description4 = events[3].description;

    var price5 = `Price: $${castToDollar(events[4].price)} | Decreases criminal level by 18%`;
    var description5 = events[4].description;

    var price6 = `Price: $${castToDollar(events[5].price)} | Decreases criminal level by 22%`;
    var description6 = events[5].description;

    var price7 = `Price: $${castToDollar(events[6].price)} | Decreases criminal level by 24%`;
    var description7 = events[6].description;

    var price8 = `Price: $${castToDollar(events[7].price)} | Decreases criminal level by 30%`;
    var description8 = events[7].description;

    var price9 = `Price: $${castToDollar(events[8].price)} | Decreases criminal level by 33%`;
    var description9 = events[8].description;

    var price10 = `Price: $${castToDollar(events[9].price)} | Decreases criminal level by 36%`;
    var description10 = events[9].description;

    return (
      <Segment>
        <h1>Cops</h1>
        { this.state.errorCops && 
        <Message error header="Insufficient Funds" content="You don't have enough money to pay for this!" />
        }
        <Card.Group itemsPerRow={2}>
          <Card color="olive" header={events[0].name} meta={price1} description={description1} extra={this.renderButton(0, "cops")} />
          <Card color="blue" header={events[1].name} meta={price2} description={description2} extra={this.renderButton(1, "cops")} />
          <Card color="violet" header={events[2].name} meta={price3} description={description3} extra={this.renderButton(2, "cops")} />
          <Card color="pink" header={events[3].name} meta={price4} description={description4} extra={this.renderButton(3, "cops")} />
          <Card color="red" header={events[4].name} meta={price5} description={description5} extra={this.renderButton(4, "cops")}/>
          <Card color="green" header={events[5].name} meta={price6} description={description6} extra={this.renderButton(5, "cops")}/>
          <Card color="green" header={events[6].name} meta={price7} description={description7} extra={this.renderButton(5, "cops")}/>
          <Card color="green" header={events[7].name} meta={price8} description={description8} extra={this.renderButton(5, "cops")}/>
          <Card color="green" header={events[8].name} meta={price9} description={description9} extra={this.renderButton(8, "cops")}/>
          <Card color="green" header={events[9].name} meta={price10} description={description10} extra={this.renderButton(9, "cops")}/>
        </Card.Group>
      </Segment>
    );
  }

  renderCharityCards() {

    const {
      charity
    } = this.props;

    const { 
      events
    } = charity;

    var price11 = `Price: $${castToDollar(events[0].price)} | Increases public reputation by 2`;
    var description11 = events[0].description;

    var price12 = `Price: $${castToDollar(events[1].price)} | Increases public reputation by 3`;
    var description12 = events[1].description;

    var price13 = `Price: $${castToDollar(events[2].price)} | Increases public reputation by 5`;
    var description13 = events[2].description;

    var price14 = `Price: $${castToDollar(events[3].price)} | Increases public reputation by 6`;
    var description14 = events[3].description;

    var price15 = `Price: $${castToDollar(events[4].price)} | Increases public reputation by 7`;
    var description15 = events[4].description;

    var price16 = `Price: $${castToDollar(events[5].price)} | Increases public reputation by 9`;
    var description16 = events[5].description;

    var price17 = `Price: $${castToDollar(events[6].price)} | Increases public reputation by 10`;
    var description17 = events[6].description;

    var price18 = `Price: $${castToDollar(events[7].price)} | Increases public reputation by 12`;
    var description18 = events[7].description;

    var price19 = `Price: $${castToDollar(events[8].price)} | Increases public reputation by 13`;
    var description19 = events[8].description;

    var price20 = `Price: $${castToDollar(events[9].price)} | Increases public reputation by 15`;
    var description20 = events[9].description;

    return (
      <Segment>
        <h1>Charities</h1>
        { this.state.errorCharity && 
        <Message error header="Insufficient Funds" content="You don't have enough money to pay for this!" />
        }
        <Card.Group itemsPerRow={2}>
          <Card color="olive" header={events[0].name} meta={price11} description={description11} extra={this.renderButton(0, "charity")} />
          <Card color="blue" header={events[1].name} meta={price12} description={description12} extra={this.renderButton(1, "charity")} />
          <Card color="violet" header={events[2].name} meta={price13} description={description13} extra={this.renderButton(2, "charity")} />
          <Card color="pink" header={events[3].name} meta={price14} description={description14} extra={this.renderButton(3, "charity")} />
          <Card color="red" header={events[4].name} meta={price15} description={description15} extra={this.renderButton(4, "charity")}/>
          <Card color="green" header={events[5].name} meta={price16} description={description16} extra={this.renderButton(5, "charity")}/>
          <Card color="green" header={events[6].name} meta={price17} description={description17} extra={this.renderButton(5, "charity")}/>
          <Card color="green" header={events[7].name} meta={price18} description={description18} extra={this.renderButton(5, "charity")}/>
          <Card color="green" header={events[8].name} meta={price19} description={description19} extra={this.renderButton(8, "charity")}/>
          <Card color="green" header={events[9].name} meta={price20} description={description20} extra={this.renderButton(9, "charity")}/>
        </Card.Group>
      </Segment>
    );
  }

  render() {
    return (
      <Grid>
        <Grid.Column width="8">
          {this.renderCharityCards()}
        </Grid.Column>
        <Grid.Column width="8">
          {this.renderCopsCards()}
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return { stats: state.stats, charity: state.charity, cops: state.cops };
};

export default connect(
  mapStateToProps, { subtractNetWorth, buyCharity, buyCop, updateNetCash }
)(ChangeGame);