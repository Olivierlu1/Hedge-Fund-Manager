import React, { Component } from 'react';
import { Card, Container, Button, Modal, Icon } from 'semantic-ui-react';
import { nextRoundCriminalLevel } from './actions/changegame';
import { addEvent, clearEvents, advanceDate, nextTurnTechEvent, nextTurnClothingEvent, nextTurnFoodEvent, nextTurnPharmaEvent, updateRandomTech, updateRandomPharma, updateRandomFood, updateRandomClothing, updateNetCash, updateLastNetCash } from './actions/index';
import { connect } from 'react-redux';
import { fireTechOne, hireTechOneForNextTurn, hireTechTwoForNextTurn, fireTechTwo, hireTechThreeForNextTurn, fireTechThree, hireTechFourForNextTurn, fireTechFour, hireTechFiveForNextTurn, fireTechFive, addTechStockPrice } from './actions/tech';
import { hirePharmaOneForNextTurn, firePharmaOne, hirePharmaTwoForNextTurn, firePharmaTwo, hirePharmaThreeForNextTurn, firePharmaThree, hirePharmaFourForNextTurn, firePharmaFour, hirePharmaFiveForNextTurn, firePharmaFive, addPharmaStockPrice } from './actions/pharma';
import { hireFoodOneForNextTurn, fireFoodOne, hireFoodTwoForNextTurn, fireFoodTwo, hireFoodThreeForNextTurn, fireFoodThree, hireFoodFourForNextTurn, fireFoodFour, hireFoodFiveForNextTurn, fireFoodFive, addFoodStockPrice } from './actions/foods';
import { hireClothingOneForNextTurn, fireClothingOne, hireClothingTwoForNextTurn, fireClothingTwo, hireClothingThreeForNextTurn, fireClothingThree, hireClothingFourForNextTurn, fireClothingFour, hireClothingFiveForNextTurn, fireClothingFive, addClothingStockPrice } from './actions/clothing';
import { addCryptoStockPrice, updateCryptoStockPrice, boughtCryptoStock } from './actions/stocks/CryptoStock';
import { boughtTechStock } from './actions/stocks/TechStock';
import { boughtClothingStock } from './actions/stocks/ClothingStock';
import { boughtPharmaStock } from './actions/stocks/PharmaStock';
import { boughtFoodStock } from './actions/stocks/FoodStock'; 

import { updateTechStockPrice } from './actions/stocks/TechStock';
import { updateFoodStockPrice } from './actions/stocks/FoodStock';
import { updateClothingStockPrice } from './actions/stocks/ClothingStock';
import { updatePharmaStockPrice } from './actions/stocks/PharmaStock';
import NotFound from './NotFound';
import { Link } from 'react-router-dom';

// TODO: game is over

class HomePage extends Component {

  state = {
    open: false
  }

  componentDidMount() {
    if (this.props.stats.criminalLevel >= 100) {
      this.props.history.push('/gameover');
    }
  }

  onNextTurn = () => {
    this.setState({ open: true });
    this.props.advanceDate();

    this.props.nextTurnTechEvent();
    this.props.nextTurnPharmaEvent();
    this.props.nextTurnClothingEvent();
    this.props.nextTurnFoodEvent();

    this.props.updateRandomTech();
    this.props.updateRandomPharma();
    this.props.updateRandomClothing();
    this.props.updateRandomFood();

    if (this.props.techEvent.events[this.props.techEvent.index].eventRound == this.props.techEvent.round) {
      if (this.props.techEvent.events[this.props.techEvent.index].effect == "positive") {
        this.props.addEvent( { title: this.props.techEvent.events[this.props.techEvent.index].news, description: `Stock increases by ${this.props.techEvent.events[this.props.techEvent.index].percentChange * 100}%`});
      } else {
        this.props.addEvent( { title: this.props.techEvent.events[this.props.techEvent.index].news, description: `Stock decreases by ${this.props.techEvent.events[this.props.techEvent.index].percentChange * 100}%`});
      }
    }

    if (this.props.clothingEvent.events[this.props.clothingEvent.index].eventRound == this.props.clothingEvent.round) {
      if (this.props.clothingEvent.events[this.props.clothingEvent.index].effect == "positive") {
        this.props.addEvent( { title: this.props.clothingEvent.events[this.props.clothingEvent.index].news, description: `Stock increases by ${this.props.clothingEvent.events[this.props.clothingEvent.index].percentChange * 100}%`});
      } else {
        this.props.addEvent( { title: this.props.clothingEvent.events[this.props.clothingEvent.index].news, description: `Stock decreases by ${this.props.clothingEvent.events[this.props.clothingEvent.index].percentChange * 100}%`});
      }
    }

    if (this.props.pharmaEvent.events[this.props.pharmaEvent.index].eventRound == this.props.pharmaEvent.round) {
      if (this.props.pharmaEvent.events[this.props.pharmaEvent.index].effect == "positive") {
        this.props.addEvent( { title: this.props.pharmaEvent.events[this.props.pharmaEvent.index].news, description: `Stock increases by ${this.props.pharmaEvent.events[this.props.pharmaEvent.index].percentChange * 100}%`});
      } else {
        this.props.addEvent( { title: this.props.pharmaEvent.events[this.props.pharmaEvent.index].news, description: `Stock decreases by ${this.props.pharmaEvent.events[this.props.pharmaEvent.index].percentChange * 100}%`});
      }
    }

    if (this.props.foodEvent.events[this.props.foodEvent.index].eventRound == this.props.foodEvent.round) {
      if (this.props.foodEvent.events[this.props.foodEvent.index].effect == "positive") {
        this.props.addEvent( { title: this.props.foodEvent.events[this.props.foodEvent.index].news, description: `Stock increases by ${this.props.foodEvent.events[this.props.foodEvent.index].percentChange * 100}%`});
      } else {
        this.props.addEvent( { title: this.props.foodEvent.events[this.props.foodEvent.index].news, description: `Stock decreases by ${this.props.foodEvent.events[this.props.foodEvent.index].percentChange * 100}%`});
      }
    }

    this.props.addClothingStockPrice(
      {
        dior: this.props.clothingStock.dior.price,
        gucci: this.props.clothingStock.gucci.price,
        hermes: this.props.clothingStock.hermes.price,
        adidas: this.props.clothingStock.adidas.price,
        nike: this.props.clothingStock.nike.price
      }
    );

    this.props.addTechStockPrice(
      {
        facebook: this.props.techStock.facebook.price,
        apple: this.props.techStock.apple.price,
        dropbox: this.props.techStock.dropbox.price,
        microsoft: this.props.techStock.microsoft.price,
        google: this.props.techStock.google.price
      }
    );

    this.props.addFoodStockPrice(
      {
        cargill: this.props.foodStock.cargill.price,
        pepsi: this.props.foodStock.pepsi.price,
        nestle: this.props.foodStock.nestle.price,
        archer: this.props.foodStock.archer.price,
        sysco: this.props.foodStock.sysco.price
      }
    );

    this.props.addPharmaStockPrice(
      {
        merck: this.props.pharmaStock.merck.price,
        johnson: this.props.pharmaStock.johnson.price,
        hoffmann: this.props.pharmaStock.hoffmann.price,
        novartis: this.props.pharmaStock.novartis.price,
        pfizer: this.props.pharmaStock.pfizer.price
      }
    );

    this.props.addCryptoStockPrice(
      {
        eos: this.props.cryptoStock.eos.price,
        xrp: this.props.cryptoStock.xrp.price,
        bitcoin: this.props.cryptoStock.bitcoin.price,
        ethereum: this.props.cryptoStock.ethereum.price,
        tron: this.props.cryptoStock.tron.price
      }
    );


    this.props.updateCryptoStockPrice();

    this.props.updateClothingStockPrice({
      gameRound: this.props.clothingEvent.round,
      eventRound: this.props.clothingEvent.events[this.props.clothingEvent.index].eventRound,
      stock: this.props.clothingEvent.events[this.props.clothingEvent.index].stock,
      percentChange: this.props.clothingEvent.events[this.props.clothingEvent.index].percentChange,
      effect: this.props.clothingEvent.events[this.props.clothingEvent.index].effect
    });

    this.props.updateTechStockPrice({
      gameRound: this.props.techEvent.round,
      eventRound: this.props.techEvent.events[this.props.techEvent.index].eventRound,
      stock: this.props.techEvent.events[this.props.techEvent.index].stock,
      percentChange: this.props.techEvent.events[this.props.techEvent.index].percentChange,
      effect: this.props.techEvent.events[this.props.techEvent.index].effect
    });
    
    this.props.updateFoodStockPrice({
      gameRound: this.props.foodEvent.round,
      eventRound: this.props.foodEvent.events[this.props.foodEvent.index].eventRound,
      stock: this.props.foodEvent.events[this.props.foodEvent.index].stock,
      percentChange: this.props.foodEvent.events[this.props.foodEvent.index].percentChange,
      effect: this.props.foodEvent.events[this.props.foodEvent.index].effect
    });

    this.props.updatePharmaStockPrice({
      gameRound: this.props.pharmaEvent.round,
      eventRound: this.props.pharmaEvent.events[this.props.pharmaEvent.index].eventRound,
      stock: this.props.pharmaEvent.events[this.props.pharmaEvent.index].stock,
      percentChange: this.props.pharmaEvent.events[this.props.pharmaEvent.index].percentChange,
      effect: this.props.pharmaEvent.events[this.props.pharmaEvent.index].effect
    });

    this.props.nextRoundCriminalLevel();
  }

  close = () => {
    // in case someone is reading this. I know, this is horrific. but its a super lazy way to update the total value of every stock after the stock prices change. 
    this.props.boughtTechStock("apple", 0);
    this.props.boughtTechStock("dropbox", 0);
    this.props.boughtTechStock("facebook", 0);
    this.props.boughtTechStock("microsoft", 0);
    this.props.boughtTechStock("google", 0);

    this.props.boughtClothingStock("hermes", 0);
    this.props.boughtClothingStock("gucci", 0);
    this.props.boughtClothingStock("nike", 0);
    this.props.boughtClothingStock("adidas", 0);
    this.props.boughtClothingStock("dior", 0);

    this.props.boughtFoodStock("cargill", 0);
    this.props.boughtFoodStock("nestle", 0);
    this.props.boughtFoodStock("pepsi", 0);
    this.props.boughtFoodStock("sysco", 0);
    this.props.boughtFoodStock("archer", 0);

    this.props.boughtPharmaStock("pfizer", 0);
    this.props.boughtPharmaStock("novartis", 0);
    this.props.boughtPharmaStock("merck", 0);this.props.boughtPharmaStock("hoffmann", 0);
    this.props.boughtPharmaStock("johnson", 0);

    this.props.boughtCryptoStock("eos", 0);
    this.props.boughtCryptoStock("xrp", 0);
    this.props.boughtCryptoStock("ethereum", 0);
    this.props.boughtCryptoStock("tron", 0);
    this.props.boughtCryptoStock("bitcoin", 0);

    const {
      techStock,
      foodStock,
      cryptoStock,
      clothingStock,
      pharmaStock
    } = this.props;

    var techValues = techStock.apple.totalValue + techStock.dropbox.totalValue + techStock.google.totalValue + techStock.microsoft.totalValue + techStock.facebook.totalValue;

    var pharmaValues = pharmaStock.pfizer.totalValue + pharmaStock.novartis.totalValue + pharmaStock.merck.totalValue + pharmaStock.johnson.totalValue + pharmaStock.hoffmann.totalValue; 

    var foodValues = foodStock.cargill.totalValue + foodStock.nestle.totalValue + foodStock.pepsi.totalValue + foodStock.archer.totalValue + foodStock.sysco.totalValue;

    var cryptoValues = cryptoStock.eos.totalValue + cryptoStock.xrp.totalValue + cryptoStock.ethereum.totalValue + cryptoStock.bitcoin.totalValue + cryptoStock.tron.totalValue;

    var clothingValues = clothingStock.hermes.totalValue + clothingStock.gucci.totalValue + clothingStock.dior.totalValue + clothingStock.adidas.totalValue + clothingStock.nike.totalValue;
    this.props.updateLastNetCash(this.props.stats.netCash);
    this.props.updateNetCash(pharmaValues + clothingValues + cryptoValues + foodValues + techValues + this.props.stats.netWorth);

    this.setState({ open: false });
    this.props.clearEvents();
    
    this.props.hireTechOneForNextTurn();
    this.props.fireTechOne();

    this.props.hireTechTwoForNextTurn();
    this.props.fireTechTwo();

    this.props.hireTechThreeForNextTurn();
    this.props.fireTechThree();

    this.props.hireTechFourForNextTurn();
    this.props.fireTechFour();

    this.props.hireTechFiveForNextTurn();
    this.props.fireTechFive();

    // --

    this.props.hireClothingOneForNextTurn();
    this.props.fireClothingOne();

    this.props.hireClothingTwoForNextTurn();
    this.props.fireClothingTwo();
    
    this.props.hireClothingThreeForNextTurn();
    this.props.fireClothingThree();

    this.props.hireClothingFourForNextTurn();
    this.props.fireClothingFour();

    this.props.hireClothingFiveForNextTurn();
    this.props.fireClothingFive();

  //  --

    this.props.hireFoodOneForNextTurn();
    this.props.fireFoodOne();

    this.props.hireFoodTwoForNextTurn();
    this.props.fireFoodTwo();

    this.props.hireFoodThreeForNextTurn();
    this.props.fireFoodThree();

    this.props.hireFoodFourForNextTurn();
    this.props.fireFoodFour();

    this.props.hireFoodFiveForNextTurn();
    this.props.fireFoodFive();

  //  -- 

    this.props.hirePharmaOneForNextTurn();
    this.props.firePharmaOne();

    this.props.hirePharmaTwoForNextTurn();
    this.props.firePharmaTwo();

    this.props.hirePharmaThreeForNextTurn();
    this.props.firePharmaThree();

    this.props.hirePharmaFourForNextTurn();
    this.props.firePharmaThree();

    this.props.hirePharmaFiveForNextTurn();
    this.props.firePharmaFive();

    if (this.props.stats.criminalLevel >= 100) {
      this.props.history.push('/gameover');
    }
  }

  render() {

    const items = this.props.events.map(event => {
      return (
        <Modal.Description key={event.title}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <br />
        </Modal.Description>
      );
    });

    return (
      <Container textAlign="center">
        <Card.Group centered>
          <Card onClick={() => this.props.history.push('/investments')}>
            <Card.Content>
              <Card.Header>Investments</Card.Header>
              <Card.Description>Buy and Sell Stocks</Card.Description>
            </Card.Content>
          </Card>
          <Card onClick={() => this.props.history.push('/insidertrading')}>
            <Card.Content>
              <Card.Header>Insider Trading</Card.Header>
              <Card.Description>Work with informants to obtain insider information to make more money</Card.Description>
            </Card.Content>
          </Card>
          <Card onClick={() => this.props.history.push('/changethegame')}>
            <Card.Content>
              <Card.Header>Change The Game</Card.Header>
              <Card.Description>Pay off cops or donate to charities so that the public likes you more</Card.Description>
            </Card.Content>
          </Card> 
        </Card.Group>
        <Button onClick={this.onNextTurn} basic color="teal" fluid style={{marginTop: "40px"}}>
            Next Turn
        </Button>
        <Link to='/instructions'>
          <Button basic color="black" style={{ marginTop: "40px"}}>
            Instructions
          </Button>
        </Link>

        <Modal open={this.state.open} onClose={this.close}>
          <Modal.Header>Week Summary</Modal.Header>
          <Modal.Content>
            {items}
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.close}>
              <Icon name='remove' /> Close
            </Button>
          </Modal.Actions>
        </Modal>
      </Container>
    );
  };
}

const mapStateToProps = state => {
  return { events: state.events, tech: state.insiderTech, pharma: state.insiderPharma, food: state.insiderFood, clothing: state.insiderClothing, techEvent: state.techEvent, stats: state.stats, clothingEvent: state.clothingEvent, foodEvent: state.foodEvent, pharmaEvent: state.pharmaEvent, techPrices: state.techPrices, foodPrices: state.foodPrices, pharmaPrices: state.pharmaPrices, clothingPrices: state.clothingPrices, clothingStock: state.clothingStock, techStock: state.techStock, pharmaStock: state.pharmaStock, foodStock: state.foodStock, cryptoStock: state.cryptoStock, cryptoPrices: state.cryptoPrices };
};

export default connect(
  mapStateToProps,
  { addEvent, clearEvents, fireTechOne, hireTechOneForNextTurn, hireTechTwoForNextTurn, hireTechThreeForNextTurn, hireTechFourForNextTurn, hireTechFiveForNextTurn, fireTechTwo, fireTechFive, fireTechFour, fireTechThree, hireClothingFiveForNextTurn, hireClothingFourForNextTurn, hireClothingThreeForNextTurn, hireClothingTwoForNextTurn, hireClothingOneForNextTurn, fireClothingFive, fireClothingFour, fireClothingThree, fireClothingTwo, fireClothingOne,  hirePharmaFiveForNextTurn, hirePharmaFourForNextTurn, hirePharmaThreeForNextTurn, hirePharmaTwoForNextTurn, hirePharmaOneForNextTurn, firePharmaFive, firePharmaFour, firePharmaThree, firePharmaTwo, firePharmaOne, updateTechStockPrice, updateClothingStockPrice, updateFoodStockPrice,updatePharmaStockPrice, hireFoodOneForNextTurn, hireFoodTwoForNextTurn, hireFoodThreeForNextTurn, hireFoodFourForNextTurn, hireFoodFiveForNextTurn, fireFoodFive, fireFoodFour, fireFoodOne, fireFoodThree, fireFoodTwo, nextTurnTechEvent, advanceDate, updateRandomTech, addFoodStockPrice, addClothingStockPrice, addPharmaStockPrice, addTechStockPrice, nextTurnClothingEvent, nextTurnFoodEvent, nextTurnPharmaEvent, updateRandomPharma, updateRandomFood, updateRandomClothing, addCryptoStockPrice, updateCryptoStockPrice, nextRoundCriminalLevel, updateNetCash, boughtCryptoStock, boughtClothingStock, boughtPharmaStock, boughtFoodStock, boughtTechStock, updateLastNetCash }
)(HomePage);
