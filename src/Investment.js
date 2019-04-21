import React, { Component } from 'react';
import { connect } from "react-redux";
import { addNetWorth, subtractNetWorth, addEvent } from "./actions/index";
import { castToDollar, getColorArrow } from './functions';
import { boughtTechStock, soldTechStock } from './actions/stocks/TechStock';
import { boughtCryptoStock, soldCryptoStock } from './actions/stocks/CryptoStock';
import { boughtClothingStock, soldClothingStock } from './actions/stocks/ClothingStock';
import { boughtPharmaStock, soldPharmaStock } from './actions/stocks/PharmaStock';
import { boughtFoodStock, soldFoodStock } from './actions/stocks/FoodStock'; 
import { Table, Tab, Form, Input, Message, Button, Icon, Modal, Grid } from "semantic-ui-react";
import update from 'immutability-helper';
import { Link } from 'react-router-dom';
import ReactChartkick, { LineChart } from 'react-chartkick'

import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)
 

// TODO: Have seperate state variables for every input 
// Have specific error messages for each sector
// Add event messages for buy / sell all

class Investment extends Component {

  state = {
    buy: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: ""
    },
    sell: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: ""
    },
    errorMessage: "",
    errorHeader: "",
    error: false,
    open: false,
    stock: "",
    type: ""
  };

  componentDidMount() {
    if (this.props.stats.criminalLevel >= 100) {
      this.props.history.push('/gameover');
    }
  }

  buyAll = (stock) => {
    return event => {
      event.preventDefault();
      const {
          techStock,
          pharmaStock,
          foodStock,
          clothingStock,
          cryptoStock
        } = this.props;

      const {
        netWorth
      } = this.props.stats;


      if (stock === "apple" || stock === "microsoft" || stock === "facebook" || stock === "google" || stock === "dropbox") {
        const amount = Math.floor(netWorth / techStock[stock].price);
        this.props.boughtTechStock(stock, amount);
        var totalCost = amount * techStock[stock].price;
        this.props.subtractNetWorth(totalCost);
        if (amount > 0) {
          if (stock === "apple") {
            this.props.addEvent( { title: `Purchased Pear Stock`, description: `Purchased ${amount} shares at $${castToDollar(techStock[stock].price)} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "google") {
            this.props.addEvent( { title: `Purchased Googol Stock`, description: `Purchased ${amount} shares at $${castToDollar(techStock[stock].price)} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "microsoft") {
            this.props.addEvent( { title: `Purchased Wicrodoft Stock`, description: `Purchased ${amount} shares at $${castToDollar(techStock[stock].price)} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "dropbox") {
            this.props.addEvent( { title: `Purchased Boxdrop Stock`, description: `Purchased ${amount} shares at $${castToDollar(techStock[stock].price)} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "facebook") {
            this.props.addEvent( { title: `Purchased Facenovel Stock`, description: `Purchased ${amount} shares at $${castToDollar(techStock[stock].price)} for a total of $${castToDollar(totalCost)}`});
          }
        }
      } else if (stock === "cargill" || stock === "nestle" || stock === "pepsi" || stock === "archer" || stock === "sysco") {
        const amount = Math.floor(netWorth / foodStock[stock].price);
        this.props.boughtFoodStock(stock, amount);
        var totalCost1 = amount * foodStock[stock].price
        this.props.subtractNetWorth(totalCost1);
        if (amount > 0) {
          if (stock === "cargill") {
            this.props.addEvent( { title: `Purchased Cardgill Stock`, description: `Purchased ${amount} shares at $${castToDollar(foodStock[stock].price)} for a total of $${castToDollar(totalCost1)}`});
          } else if (stock === "nestle") {
            this.props.addEvent( { title: `Purchased Nestel Stock`, description: `Purchased ${amount} shares at $${castToDollar(foodStock[stock].price)} for a total of $${castToDollar(totalCost1)}`});
          } else if (stock === "pepsi") {
            this.props.addEvent( { title: `Purchased Pepsico Stock`, description: `Purchased ${amount} shares at $${castToDollar(foodStock[stock].price)} for a total of $${castToDollar(totalCost1)}`});
          } else if (stock === "archer") {
            this.props.addEvent( { title: `Purchased Cooca-Coola Stock`, description: `Purchased ${amount} shares at $${castToDollar(foodStock[stock].price)} for a total of $${castToDollar(totalCost1)}`});
          } else if (stock === "sysco") {
            this.props.addEvent( { title: `Purchased Sisco Stock`, description: `Purchased ${amount} shares at $${castToDollar(foodStock[stock].price)} for a total of $${castToDollar(totalCost1)}`});
          }
        }
      } else if (stock === "pfizer" || stock === "novartis" || stock === "hoffmann" || stock === "merck" || stock === "johnson") {
        const amount = Math.floor(netWorth / pharmaStock[stock].price);
        this.props.boughtPharmaStock(stock, amount);
        var totalCost2 = amount * pharmaStock[stock].price;
        this.props.subtractNetWorth(totalCost2);
        if (amount > 0) {
          if (stock === "pfizer") {
            this.props.addEvent( { title: `Purchased Fizzer Stock`, description: `Purchased ${amount} shares at $${castToDollar(pharmaStock[stock].price)} for a total of $${castToDollar(totalCost2)}`});
          } else if (stock === "novartis") {
            this.props.addEvent( { title: `Purchased MedicinePlus Stock`, description: `Purchased ${amount} shares at $${castToDollar(pharmaStock[stock].price)} for a total of $${castToDollar(totalCost2)}`});
          } else if (stock === "hoffmann") {
            this.props.addEvent( { title: `Purchased Hofman-LaRose Stock`, description: `Purchased ${amount} shares at $${castToDollar(pharmaStock[stock].price)} for a total of $${castToDollar(totalCost2)}`});
          } else if (stock === "merck") {
            this.props.addEvent( { title: `Purchased Murck & Co. Stock`, description: `Purchased ${amount} shares at $${castToDollar(pharmaStock[stock].price)} for a total of $${castToDollar(totalCost2)}`});
          } else if (stock === "johnson") {
            this.props.addEvent( { title: `Purchased Johnny & Johnny Stock`, description: `Purchased ${amount} shares at $${castToDollar(pharmaStock[stock].price)} for a total of $${castToDollar(totalCost2)}`});
          }
        }
      } else if (stock === "dior" || stock === "nike" || stock === "adidas" || stock === "gucci" || stock === "hermes") {
        const amount = Math.floor(netWorth / clothingStock[stock].price);
        var totalCost3;
        if (amount != 0) {
          this.props.boughtClothingStock(stock, amount);
          totalCost3 = amount * clothingStock[stock].price;
          this.props.subtractNetWorth(totalCost3);
        }
        if (amount > 0) {
          if (stock === "dior") {
            this.props.addEvent( { title: `Purchased Doir Stock`, description: `Purchased ${amount} shares at $${castToDollar(clothingStock[stock].price)} for a total of $${castToDollar(totalCost3)}`});
          } else if (stock === "nike") {
            this.props.addEvent( { title: `Purchased Nikke Stock`, description: `Purchased ${amount} shares at $${castToDollar(clothingStock[stock].price)} for a total of $${castToDollar(totalCost3)}`});
          } else if (stock === "adidas") {
            this.props.addEvent( { title: `Purchased Addiddas Stock`, description: `Purchased ${amount} shares at $${castToDollar(clothingStock[stock].price)} for a total of $${castToDollar(totalCost3)}`});
          } else if (stock === "gucci") {
            this.props.addEvent( { title: `Purchased Guchi Stock`, description: `Purchased ${amount} shares at $${castToDollar(clothingStock[stock].price)} for a total of $${castToDollar(totalCost3)}`});
          } else if (stock === "hermes") {
            this.props.addEvent( { title: `Purchased Harmes Stock`, description: `Purchased ${amount} shares at $${castToDollar(clothingStock[stock].price)} for a total of $${castToDollar(totalCost3)}`});
          }
        }
      } else if (stock === "eos" || stock === "xrp" || stock === "bitcoin" || stock === "tron" || stock === "ethereum") {
        const amount = Math.floor(netWorth / cryptoStock[stock].price);
        this.props.boughtCryptoStock(stock, amount);
        var totalCost4 = amount * cryptoStock[stock].price;
        this.props.subtractNetWorth(totalCost4);
        if (amount > 0) {
          if (stock === "eos") {
            this.props.addEvent( { title: `Purchased EOS`, description: `Purchased ${amount} EOS at $${castToDollar(cryptoStock[stock].price)} for a total of $${castToDollar(totalCost4)}`});
          } else if (stock === "xrp") {
            this.props.addEvent( { title: `Purchased XRP`, description: `Purchased ${amount} XRP at $${castToDollar(cryptoStock[stock].price)} for a total of $${castToDollar(totalCost4)}`});
          } else if (stock === "bitcoin") {
            this.props.addEvent( { title: `Purchased Bitcoin`, description: `Purchased ${amount} Bitcoin at $${castToDollar(cryptoStock[stock].price)} for a total of $${castToDollar(totalCost4)}`});
          } else if (stock === "tron") {
            this.props.addEvent( { title: `Purchased Tron`, description: `Purchased ${amount} TRON at $${castToDollar(cryptoStock[stock].price)} for a total of $${castToDollar(totalCost4)}`});
          } else if (stock === "ethereum") {
            this.props.addEvent( { title: `Purchased Ethereum`, description: `Purchased ${amount} Ether at $${castToDollar(cryptoStock[stock].price)} for a total of $${castToDollar(totalCost4)}`});
          }
        }
      }
    }
  }

  sellAll = stock => {
    return event => {
      event.preventDefault();
      const {
          techStock,
          pharmaStock,
          foodStock,
          clothingStock,
          cryptoStock
        } = this.props;

      const {
        netWorth
      } = this.props.stats;

      if (stock === "apple" || stock === "microsoft" || stock === "facebook" || stock === "google" || stock === "dropbox") {
        const amount = techStock[stock].sharesOwned;
        this.props.soldTechStock(stock, amount);
        var totalCost = amount * techStock[stock].price;
        this.props.addNetWorth(totalCost);
        if (amount > 0) {
          if (stock === "apple") {
            this.props.addEvent( { title: `Sold Pear Stock`, description: `Sold ${amount} shares at $${techStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "google") {
            this.props.addEvent( { title: `Sold Googol Stock`, description: `Sold ${amount} shares at $${techStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "microsoft") {
            this.props.addEvent( { title: `Sold Wicrodoft Stock`, description: `Sold ${amount} shares at $${techStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "dropbox") {
            this.props.addEvent( { title: `Sold Boxdrop Stock`, description: `Sold ${amount} shares at $${techStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "facebook") {
            this.props.addEvent( { title: `Sold Facenovel Stock`, description: `Sold ${amount} shares at $${techStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          }
        }
      } else if (stock === "cargill" || stock === "nestle" || stock === "pepsi" || stock === "archer" || stock === "sysco") {
        const amount = foodStock[stock].sharesOwned;
        this.props.soldFoodStock(stock, amount);
        var totalCost = amount * foodStock[stock].price;
        this.props.addNetWorth(totalCost);
        if (amount > 0) {
          if (stock === "cargill") {
            this.props.addEvent( { title: `Sold Cardgill Stock`, description: `Sold ${amount} shares at $${foodStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "nestle") {
            this.props.addEvent( { title: `Sold Nestel Stock`, description: `Sold ${amount} shares at $${foodStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "pepsi") {
            this.props.addEvent( { title: `Sold Pepsico Stock`, description: `Sold ${amount} shares at $${foodStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "archer") {
            this.props.addEvent( { title: `Sold Cooca-Coola Stock`, description: `Sold ${amount} shares at $${foodStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "sysco") {
            this.props.addEvent( { title: `Sold Sisco Stock`, description: `Sold ${amount} shares at $${foodStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          }
        }
      } else if (stock === "pfizer" || stock === "novartis" || stock === "hoffmann" || stock === "merck" || stock === "johnson") {
        const amount = pharmaStock[stock].sharesOwned;
        this.props.soldPharmaStock(stock, amount);
        var totalCost = amount * pharmaStock[stock].price;
        this.props.addNetWorth(totalCost);
        if (amount > 0) {
          if (stock === "pfizer") {
            this.props.addEvent( { title: `Sold Fizzer Stock`, description: `Sold ${amount} shares at $${pharmaStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "novartis") {
            this.props.addEvent( { title: `Sold MedicinePlus Stock`, description: `Sold ${amount} shares at $${pharmaStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "hoffmann") {
            this.props.addEvent( { title: `Sold Hofman-LaRose Stock`, description: `Sold ${amount} shares at $${pharmaStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "merck") {
            this.props.addEvent( { title: `Sold Murck & Co. Stock`, description: `Sold ${amount} shares at $${pharmaStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "johnson") {
            this.props.addEvent( { title: `Sold Johnny & Johnny Stock`, description: `Sold ${amount} shares at $${pharmaStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          }
        }     
      } else if (stock === "dior" || stock === "nike" || stock === "adidas" || stock === "gucci" || stock === "hermes") {
        const amount = clothingStock[stock].sharesOwned;
        this.props.soldClothingStock(stock, amount);
        var totalCost = amount * clothingStock[stock].price;
        this.props.addNetWorth(totalCost);
        if (amount > 0) {
          if (stock === "dior") {
            this.props.addEvent( { title: `Sold Doir Stock`, description: `Sold ${amount} shares at $${clothingStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "nike") {
            this.props.addEvent( { title: `Sold Nikke Stock`, description: `Sold ${amount} shares at $${clothingStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "adidas") {
            this.props.addEvent( { title: `Sold Addiddas Stock`, description: `Sold ${amount} shares at $${clothingStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "gucci") {
            this.props.addEvent( { title: `Sold Guchi Stock`, description: `Sold ${amount} shares at $${clothingStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "hermes") {
            this.props.addEvent( { title: `Sold Harmes Stock`, description: `Sold ${amount} shares at $${clothingStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          }
        }
      } else if (stock === "eos" || stock === "xrp" || stock === "bitcoin" || stock === "tron" || stock === "ethereum") {
        const amount = cryptoStock[stock].sharesOwned;
        this.props.soldCryptoStock(stock, amount);
        var totalCost = amount * cryptoStock[stock].price;
        this.props.addNetWorth(totalCost);
        if (amount > 0) {
          if (stock === "eos") {
            this.props.addEvent( { title: `Purchased EOS`, description: `Purchased ${amount} EOS at $${cryptoStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "xrp") {
            this.props.addEvent( { title: `Purchased XRP`, description: `Purchased ${amount} XRP at $${cryptoStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "bitcoin") {
            this.props.addEvent( { title: `Purchased Bitcoin`, description: `Purchased ${amount} Bitcoin at $${cryptoStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "tron") {
            this.props.addEvent( { title: `Purchased Tron`, description: `Purchased ${amount} TRON at $${cryptoStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          } else if (stock === "ethereum") {
            this.props.addEvent( { title: `Purchased Ethereum`, description: `Purchased ${amount} Ether at $${cryptoStock[stock].price} for a total of $${castToDollar(totalCost)}`});
          }
        }
      }
    }
  }

  onSubmitBuy = (number, stock, amount) => {
    return event => {
      event.preventDefault();

      if (isNaN(amount) || amount === "" || amount < 1) {
        this.setState({ error: true, errorHeader: "Invalid Input", errorMessage: "Please enter a valid number"});
      } else {        
        this.setState({ error: false, errorMessage: ""});

        const {
          techStock,
          pharmaStock,
          foodStock,
          clothingStock,
          cryptoStock
        } = this.props;

        switch (stock) {
          case "apple":
            var totalCost = parseInt(this.state.buy[number]) * techStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtTechStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * techStock[stock].price);
              this.props.addEvent( { title: `Purchased Pear Stock`, description: `Purchased ${amount} shares at $${techStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "google":
            totalCost = parseInt(this.state.buy[number]) * techStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtTechStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * techStock[stock].price);
              this.props.addEvent( { title: `Purchased Googol Stock`, description: `Purchased ${amount} shares at $${techStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "microsoft":
            totalCost = parseInt(this.state.buy[number]) * techStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtTechStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * techStock[stock].price);
              this.props.addEvent( { title: `Purchased Wicrodoft Stock`, description: `Purchased ${amount} shares at $${techStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "facebook":
            totalCost = parseInt(this.state.buy[number]) * techStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtTechStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * techStock[stock].price);
              this.props.addEvent( { title: `Purchased Facenovel Stock`, description: `Purchased ${amount} shares at $${techStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "dropbox":
            totalCost = parseInt(this.state.buy[number]) * techStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtTechStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * techStock[stock].price);
              this.props.addEvent( { title: `Purchased Boxdrop Stock`, description: `Purchased ${amount} shares at $${techStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "pfizer":
            totalCost = parseInt(this.state.buy[number]) * pharmaStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtPharmaStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * pharmaStock[stock].price);
              this.props.addEvent( { title: `Purchased Fizzer Stock`, description: `Purchased ${amount} shares at $${pharmaStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "novartis":
            totalCost = parseInt(this.state.buy[number]) * pharmaStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtPharmaStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * pharmaStock[stock].price);
              this.props.addEvent( { title: `Purchased MedicinePlus Stock`, description: `Purchased ${amount} shares at $${pharmaStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "hoffmann":
            totalCost = parseInt(this.state.buy[number]) * pharmaStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtPharmaStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * pharmaStock[stock].price);
              this.props.addEvent( { title: `Purchased Hofman-LaRose Stock`, description: `Purchased ${amount} shares at $${pharmaStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "merck":
            totalCost = parseInt(this.state.buy[number]) * pharmaStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtPharmaStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * pharmaStock[stock].price);
              this.props.addEvent( { title: `Purchased Murck & Co. Stock`, description: `Purchased ${amount} shares at $${pharmaStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "johnson":
            totalCost = parseInt(this.state.buy[number]) * pharmaStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtPharmaStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * pharmaStock[stock].price);
              this.props.addEvent( { title: `Purchased Johnny & Johnny Stock`, description: `Purchased ${amount} shares at $${pharmaStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "cargill":
            totalCost = parseInt(this.state.buy[number]) * foodStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtFoodStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * foodStock[stock].price);
              this.props.addEvent( { title: `Purchased Cardgill Stock`, description: `Purchased ${amount} shares at $${foodStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "nestle":
            totalCost = parseInt(this.state.buy[number]) * foodStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtFoodStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * foodStock[stock].price);
              this.props.addEvent( { title: `Purchased Nestel Stock`, description: `Purchased ${amount} shares at $${foodStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "pepsi":
            totalCost = parseInt(this.state.buy[number]) * foodStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtFoodStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * foodStock[stock].price);
              this.props.addEvent( { title: `Purchased PepisCo Stock`, description: `Purchased ${amount} shares at $${foodStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "archer":
            totalCost = parseInt(this.state.buy[number]) * foodStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtFoodStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * foodStock[stock].price);
              this.props.addEvent( { title: `Purchased Cooca-Coola Company Stock`, description: `Purchased ${amount} shares at $${foodStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "sysco":
            totalCost = parseInt(this.state.buy[number]) * foodStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtFoodStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * foodStock[stock].price);
              this.props.addEvent( { title: `Purchased Sisco Stock`, description: `Purchased ${amount} shares at $${foodStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "dior":
            totalCost = parseInt(this.state.buy[number]) * clothingStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtClothingStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * clothingStock[stock].price);
              this.props.addEvent( { title: `Purchased Doir Stock`, description: `Purchased ${amount} shares at $${clothingStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "nike":
            totalCost = parseInt(this.state.buy[number]) * clothingStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtClothingStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * clothingStock[stock].price);
              this.props.addEvent( { title: `Purchased Nikke Stock`, description: `Purchased ${amount} shares at $${clothingStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "adidas":
            totalCost = parseInt(this.state.buy[number]) * clothingStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtClothingStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * clothingStock[stock].price);
              this.props.addEvent( { title: `Purchased Addiddas Stock`, description: `Purchased ${amount} shares at $${clothingStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "gucci":
            totalCost = parseInt(this.state.buy[number]) * clothingStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtClothingStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * clothingStock[stock].price);
              this.props.addEvent( { title: `Purchased Guchi Stock`, description: `Purchased ${amount} shares at $${clothingStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "hermes":
            totalCost = parseInt(this.state.buy[number]) * clothingStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtClothingStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * clothingStock[stock].price);
              this.props.addEvent( { title: `Purchased Harmes Stock`, description: `Purchased ${amount} shares at $${clothingStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "eos":
            totalCost = parseInt(this.state.buy[number]) * cryptoStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtCryptoStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * cryptoStock[stock].price);
              this.props.addEvent( { title: `Purchased EOS`, description: `Purchased ${amount} EOS at $${cryptoStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "tron":
            totalCost = parseInt(this.state.buy[number]) * cryptoStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtCryptoStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * cryptoStock[stock].price);
              this.props.addEvent( { title: `Purchased TRON`, description: `Purchased ${amount} TRON at $${cryptoStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "xrp":
            totalCost = parseInt(this.state.buy[number]) * cryptoStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtCryptoStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * cryptoStock[stock].price);
              this.props.addEvent( { title: `Purchased XRP`, description: `Purchased ${amount} XRP at $${cryptoStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "bitcoin":
            totalCost = parseInt(this.state.buy[number]) * cryptoStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtCryptoStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * cryptoStock[stock].price);
              this.props.addEvent( { title: `Purchased Bitcoin`, description: `Purchased ${amount} Bitcoin at $${cryptoStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          case "ethereum":
            totalCost = parseInt(this.state.buy[number]) * cryptoStock[stock].price;
            if (totalCost > this.props.stats.netWorth) {
              this.setState({ error: true, errorHeader: "Insufficent Funds", errorMessage: "You don't have enough money to purchase that!"});
            } else {
              this.props.boughtCryptoStock(stock, parseInt(amount));
              this.props.subtractNetWorth(parseInt(this.state.buy[number]) * cryptoStock[stock].price);
              this.props.addEvent( { title: `Purchased Ethereum`, description: `Purchased ${amount} Ether at $${cryptoStock[stock].price} for a total of $${castToDollar(totalCost)}`});
            }
            break;
          default:
            console.log("Wtf just happened buy");
            break;
        }

        var newState = update(this.state.buy, {
          1: {$set: ''},
          2: {$set: ''},
          3: {$set: ''},
          4: {$set: ''},
          5: {$set: ''}
        });
        this.setState({buy: newState});
        }
    }
  };

  onSubmitSell = (number, stock, amount) => {
    return event => {
      event.preventDefault();

      if (isNaN(amount) || amount === "" || amount < 1) {
        this.setState({ error: true, errorHeader: "Invalid Input", errorMessage: "Please enter a valid number"});
      } else {        
        this.setState({ error: false, errorMessage: ""});

        const {
          techStock,
          pharmaStock,
          foodStock,
          clothingStock,
          cryptoStock
        } = this.props;

        switch (stock) {
          case "apple":
            if (amount > techStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldTechStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * techStock[stock].price);
              this.props.addEvent( { title: `Sold Pear Stock`, description: `Sold ${amount} shares at $${techStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * techStock[stock].price}`});
            }
            break;
          case "google":
            if (amount > techStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldTechStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * techStock[stock].price);
              this.props.addEvent( { title: `Sold Googol Stock`, description: `Sold ${amount} shares at $${techStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * techStock[stock].price}`});
            }
            break;
          case "microsoft":
            if (amount > techStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldTechStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * techStock[stock].price);
              this.props.addEvent( { title: `Sold Wicrodoft Stock`, description: `Sold ${amount} shares at $${techStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * techStock[stock].price}`});
            }
            break;
          case "facebook":
            if (amount > techStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldTechStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * techStock[stock].price);
              this.props.addEvent( { title: `Sold Facenovel Stock`, description: `Sold ${amount} shares at $${techStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * techStock[stock].price}`});
            }
            break;
          case "dropbox":
            if (amount > techStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldTechStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * techStock[stock].price);
              this.props.addEvent( { title: `Sold Boxdrop Stock`, description: `Sold ${amount} shares at $${techStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * techStock[stock].price}`});
            }
            break;
          case "pfizer":
            if (amount > pharmaStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldPharmaStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * pharmaStock[stock].price);
              this.props.addEvent( { title: `Sold Fizzer Stock`, description: `Sold ${amount} shares at $${pharmaStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * pharmaStock[stock].price}`});
            }
            break;
          case "novartis":
            if (amount > pharmaStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldPharmaStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * pharmaStock[stock].price);
              this.props.addEvent( { title: `Sold MedicinePlus Stock`, description: `Sold ${amount} shares at $${pharmaStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * pharmaStock[stock].price}`});
            }
            break;
          case "hoffmann":
            if (amount > pharmaStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldPharmaStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * pharmaStock[stock].price);
              this.props.addEvent( { title: `Sold Hofman-LaRose Stock`, description: `Sold ${amount} shares at $${pharmaStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * pharmaStock[stock].price}`});
            }
            break;
          case "merck":
            if (amount > pharmaStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldPharmaStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * pharmaStock[stock].price);
              this.props.addEvent( { title: `Sold Murck & Co. Stock`, description: `Sold ${amount} shares at $${pharmaStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * pharmaStock[stock].price}`});
            }
            break;
          case "johnson":
            if (amount > pharmaStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldPharmaStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * pharmaStock[stock].price);
              this.props.addEvent( { title: `Sold Johnny & Johnny Stock`, description: `Sold ${amount} shares at $${pharmaStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * pharmaStock[stock].price}`});
            }
            break;
          case "cargill":
            if (amount > foodStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldFoodStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * foodStock[stock].price);
              this.props.addEvent( { title: `Sold Cardgill Stock`, description: `Sold ${amount} shares at $${foodStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * foodStock[stock].price}`});
            }
            break;
          case "nestle":
            if (amount > foodStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldFoodStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * foodStock[stock].price);
              this.props.addEvent( { title: `Sold Nestel Stock`, description: `Sold ${amount} shares at $${foodStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * foodStock[stock].price}`});
            }
            break;
          case "pepsi":
            if (amount > foodStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldFoodStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * foodStock[stock].price);
              this.props.addEvent( { title: `Sold PepisCo Stock`, description: `Sold ${amount} shares at $${foodStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * foodStock[stock].price}`});
            }
            break;
          case "archer":
            if (amount > foodStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldFoodStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * foodStock[stock].price);
              this.props.addEvent( { title: `Sold Cooca-Coola Company Stock`, description: `Sold ${amount} shares at $${foodStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * foodStock[stock].price}`});
            }
            break;
          case "sysco":
            if (amount > foodStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldFoodStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * foodStock[stock].price);
              this.props.addEvent( { title: `Sold Sisco Stock`, description: `Sold ${amount} shares at $${foodStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * foodStock[stock].price}`});
            }
            break;
          case "dior":
            if (amount > clothingStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldClothingStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * clothingStock[stock].price);
              this.props.addEvent( { title: `Sold Doir Stock`, description: `Sold ${amount} shares at $${clothingStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * clothingStock[stock].price}`});
            }
            break;
          case "nike":
            if (amount > clothingStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldClothingStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * clothingStock[stock].price);
              this.props.addEvent( { title: `Sold Nikke Stock`, description: `Sold ${amount} shares at $${clothingStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * clothingStock[stock].price}`});
            }
            break;
          case "adidas":
            if (amount > clothingStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldClothingStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * clothingStock[stock].price);
              this.props.addEvent( { title: `Sold Addiddas Stock`, description: `Sold ${amount} shares at $${clothingStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * clothingStock[stock].price}`});
            }
            break;
          case "gucci":
            if (amount > clothingStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldClothingStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * clothingStock[stock].price);
              this.props.addEvent( { title: `Sold Guchi Stock`, description: `Sold ${amount} shares at $${clothingStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * clothingStock[stock].price}`});
            }
            break;
          case "hermes":
            if (amount > clothingStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Shares", errorMessage: "You don't have that many shares!"});
            } else {
              this.props.soldClothingStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * clothingStock[stock].price);
              this.props.addEvent( { title: `Sold Harmes Stock`, description: `Sold ${amount} shares at $${clothingStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * clothingStock[stock].price}`});
            }
            break;
          case "eos":
            if (amount > cryptoStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Value", errorMessage: "You don't have that many EOS"});
            } else {
              this.props.soldCryptoStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * cryptoStock[stock].price);
              this.props.addEvent( { title: `Sold EOS`, description: `Sold ${amount} EOS at $${cryptoStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * cryptoStock[stock].price}`});
            }
            break;
          case "tron":
            if (amount > cryptoStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Value", errorMessage: "You don't have that many TRON"});
            } else {
              this.props.soldCryptoStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * cryptoStock[stock].price);
              this.props.addEvent( { title: `Sold TRON`, description: `Sold ${amount} TRON at $${cryptoStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * cryptoStock[stock].price}`});
            }
            break;
          case "xrp":
            if (amount > cryptoStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Value", errorMessage: "You don't have that many XRP"});
            } else {
              this.props.soldCryptoStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * cryptoStock[stock].price);
              this.props.addEvent( { title: `Sold XRP`, description: `Sold ${amount} XRP at $${cryptoStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * cryptoStock[stock].price}`});
            }
            break;
          case "bitcoin":
            if (amount > cryptoStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Value", errorMessage: "You don't have that many Bitcoin"});
            } else {
              this.props.soldCryptoStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * cryptoStock[stock].price);
              this.props.addEvent( { title: `Sold Bitcoin`, description: `Sold ${amount} Bitcoin at $${cryptoStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * cryptoStock[stock].price}`});
            }
            break;
          case "ethereum":
            if (amount > cryptoStock[stock].sharesOwned) {
                this.setState({ error: true, errorHeader: "Insufficent Value", errorMessage: "You don't have that many Ether"});
            } else {
              this.props.soldCryptoStock(stock, parseInt(amount));
              this.props.addNetWorth(parseInt(this.state.sell[number]) * cryptoStock[stock].price);
              this.props.addEvent( { title: `Sold Ethereum`, description: `Sold ${amount} Ether at $${cryptoStock[stock].price} for a total profit of $${parseInt(this.state.buy[number]) * cryptoStock[stock].price}`});
            }
            break;
          default:
            console.log("Wtf just happened");
            break;
        }

        var newState = update(this.state.sell, {
          1: {$set: ''},
          2: {$set: ''},
          3: {$set: ''},
          4: {$set: ''},
          5: {$set: ''}
        });

        this.setState({sell: newState});
      }
    }
  }

  handleClick = (stock, type) => {
    return event => {
      event.preventDefault();
      this.setState({ stock: stock, type: type, open: true});
    }
  }
  renderTableCrypto() {

    const {
      eos,
      xrp,
      bitcoin,
      tron,
      ethereum
    } = this.props.cryptoStock;

    const {
      eos: eosPrices,
      xrp: xrpPrices,
      bitcoin: bitcoinPrices,
      tron: tronPrices,
      ethereum: ethereumPrices
    } = this.props.cryptoPrices

    const eosColor = getColorArrow(eos.price, this.props.cryptoPrices["eos"]);
    const xrpColor = getColorArrow(xrp.price, xrpPrices);
    const bitcoinColor = getColorArrow(bitcoin.price, bitcoinPrices);
    const tronColor = getColorArrow(tron.price, tronPrices);
    const ethereumColor = getColorArrow(ethereum.price, ethereumPrices);

    return (
        <div>
          { this.state.error && 
          <Message error header={this.state.errorHeader} content={this.state.errorMessage} />
          }
          
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Shares Owned</Table.HeaderCell>
              <Table.HeaderCell>Total Value</Table.HeaderCell>
              <Table.HeaderCell>Buy Shares</Table.HeaderCell>
              <Table.HeaderCell>Sell Shares</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Bitcoin</Table.Cell>
              <Table.Cell style={{ color: bitcoinColor.color}}>${castToDollar(bitcoin.price)} {bitcoinColor.arrow != "" ? <Icon name={bitcoinColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("bitcoin", "crypto")}>Price History</Button></Table.Cell>
              <Table.Cell>{bitcoin.sharesOwned}</Table.Cell>
              <Table.Cell>${castToDollar(bitcoin.totalValue)}</Table.Cell>
              <Table.Cell>
                <Form onSubmit={this.onSubmitBuy(3, "bitcoin", this.state.buy[3])}>
                  <Input
                    value={this.state.buy[3]}
                    action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                    placeholder="# of Stocks"
                    fluid
                    onChange={event => this.setState({ buy: update(this.state.buy, {
                      3: {$set: event.target.value}
                    })})}
                    size="small"
                    />
                </Form>
                <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("bitcoin")} basic color="teal">Buy All</Button>
              </Table.Cell>
              <Table.Cell>
                <Form onSubmit={this.onSubmitSell(3, "bitcoin", this.state.sell[3])}>
                  <Input
                    value={this.state.sell[3]}
                    action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                    placeholder="# of Stocks"
                    onChange={event => this.setState({ sell: update(this.state.sell, {
                      3: {$set: event.target.value}
                    })})}
                    fluid
                    size="small"
                    />
                </Form>
                <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("bitcoin")} basic color="teal">Sell All</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Ethereum</Table.Cell>
              <Table.Cell style={{ color: ethereumColor.color}}>${castToDollar(ethereum.price)} {ethereumColor.arrow != "" ? <Icon name={ethereumColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("ethereum", "crypto")}>Price History</Button></Table.Cell>
              <Table.Cell>{ethereum.sharesOwned}</Table.Cell>
              <Table.Cell>${castToDollar(ethereum.totalValue)}</Table.Cell>
              <Table.Cell>
                <Form onSubmit={this.onSubmitBuy(5, "ethereum", this.state.buy[5])}>
                  <Input
                    value={this.state.buy[5]}
                    action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                    placeholder="# of Stocks"
                    fluid
                    onChange={event => this.setState({ buy: update(this.state.buy, {
                      5: {$set: event.target.value}
                    })})}
                    size="small"
                    />
                </Form>
                <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("ethereum")} basic color="teal">Buy All</Button>
              </Table.Cell>
              <Table.Cell>
                <Form onSubmit={this.onSubmitSell(5, "ethereum", this.state.sell[5])}>
                  <Input
                    value={this.state.sell[5]}
                    action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                    placeholder="# of Stocks"
                    onChange={event => this.setState({ sell: update(this.state.sell, {
                      5: {$set: event.target.value}
                    })})}
                    fluid
                    size="small"
                    />
                </Form>
                <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("ethereum")} basic color="teal">Sell All</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>EOS</Table.Cell>
              <Table.Cell style={{ color: eosColor.color}}>
                ${castToDollar(eos.price)} {eosColor.arrow != "" ? <Icon name={eosColor.arrow} /> : <p></p>}
                  <Button basic color="blue" onClick={this.handleClick("eos", "crypto")}>Price History</Button>
              </Table.Cell>
              <Table.Cell>{eos.sharesOwned}</Table.Cell>
              <Table.Cell>${castToDollar(eos.totalValue)}</Table.Cell>
              <Table.Cell>
                  <Form onSubmit={this.onSubmitBuy(1, "eos", this.state.buy[1])}>
                  <Input
                    value={this.state.buy[1]}
                    action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                    placeholder="# of Stocks"
                    fluid
                    onChange={event => this.setState({ buy: update(this.state.buy, {
                      1: {$set: event.target.value}
                    })})}
                    size="small"
                    />
                </Form>
                <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("eos")} basic color="teal">Buy All</Button>
              </Table.Cell>
              <Table.Cell>
                <Form onSubmit={this.onSubmitSell(1, "eos", this.state.sell[1])}>
                  <Input
                    value={this.state.sell[1]}
                    action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                    placeholder="# of Stocks"
                    onChange={event => this.setState({ sell: update(this.state.sell, {
                      1: {$set: event.target.value}
                    })})}
                    fluid
                    size="small"
                    />
                </Form>
                <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("eos")} basic color="teal">Sell All</Button>
              
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>XRP</Table.Cell>
              <Table.Cell style={{ color: xrpColor.color}}>${castToDollar(xrp.price)} {xrpColor.arrow != "" ? <Icon name={xrpColor.arrow} /> : <p></p>}
              <Button basic color="blue" onClick={this.handleClick("xrp", "crypto")}>Price History</Button></Table.Cell>
              <Table.Cell>{xrp.sharesOwned}</Table.Cell>
              <Table.Cell>${castToDollar(xrp.totalValue)}</Table.Cell>
              <Table.Cell>
                <Form onSubmit={this.onSubmitBuy(2, "xrp", this.state.buy[2])}>
                  <Input
                    value={this.state.buy[2]}
                    action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                    placeholder="# of Stocks"
                    fluid
                    onChange={event => this.setState({ buy: update(this.state.buy, {
                      2: {$set: event.target.value}
                    })})}
                    size="small"
                    />
                </Form>
                <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("xrp")} basic color="teal">Buy All</Button>
              </Table.Cell>
              <Table.Cell>
                <Form onSubmit={this.onSubmitSell(2, "xrp", this.state.sell[2])}>
                  <Input
                    value={this.state.sell[2]}
                    action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                    placeholder="# of Stocks"
                    onChange={event => this.setState({ sell: update(this.state.sell, {
                      2: {$set: event.target.value}
                    })})}
                    fluid
                    size="small"
                    />
                </Form>
                <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("xrp")} basic color="teal">Sell All</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>TRON</Table.Cell>
              <Table.Cell style={{ color: tronColor.color}}>${castToDollar(tron.price)} {tronColor.arrow != "" ? <Icon name={tronColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("tron", "crypto")}>Price History</Button></Table.Cell>
              <Table.Cell>{tron.sharesOwned}</Table.Cell>
              <Table.Cell>${castToDollar(tron.totalValue)}</Table.Cell>
              <Table.Cell>
                <Form onSubmit={this.onSubmitBuy(4, "tron", this.state.buy[4])}>
                  <Input
                    value={this.state.buy[4]}
                    action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                    placeholder="# of Stocks"
                    fluid
                    onChange={event => this.setState({ buy: update(this.state.buy, {
                      4: {$set: event.target.value}
                    })})}
                    size="small"
                    />
                </Form>
                <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("tron")} basic color="teal">Buy All</Button>
              </Table.Cell>
              <Table.Cell>
                <Form onSubmit={this.onSubmitSell(4, "tron", this.state.sell[4])}>
                  <Input
                    value={this.state.sell[4]}
                    action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                    placeholder="# of Stocks"
                    onChange={event => this.setState({ sell: update(this.state.sell, {
                      4: {$set: event.target.value}
                    })})}
                    fluid
                    size="small"
                    />
                </Form>
                <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("tron")} basic color="teal">Sell All</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      );
    }

  renderTableTech() {
    const {
      apple,
      google,
      microsoft,
      facebook,
      dropbox
    } = this.props.techStock;

    const {
      apple: applePrices,
      google: googlePrices,
      microsoft: microsoftPrices,
      facebook: facebookPrices,
      dropbox: dropboxPrices
    } = this.props.techPrices

    const {
      techPrices
    } = this.props;

    const appleColor = getColorArrow(apple.price, this.props.techPrices["apple"]);
    const dropboxColor = getColorArrow(dropbox.price, dropboxPrices);
    const facebookColor = getColorArrow(facebook.price, facebookPrices);
    const microsoftColor = getColorArrow(microsoft.price, microsoftPrices);
    const googleColor = getColorArrow(google.price, googlePrices);

    return (
      <div>
        { this.state.error && 
        <Message error header={this.state.errorHeader} content={this.state.errorMessage} />
        }
        
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Shares Owned</Table.HeaderCell>
            <Table.HeaderCell>Total Value</Table.HeaderCell>
            <Table.HeaderCell>Buy Shares</Table.HeaderCell>
            <Table.HeaderCell>Sell Shares</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Pear</Table.Cell>
            <Table.Cell style={{ color: appleColor.color}}>
               ${castToDollar(apple.price)} {appleColor.arrow != "" ? <Icon name={appleColor.arrow} /> : <p></p>}
                <Button basic color="blue" onClick={this.handleClick("apple", "tech")}>Price History</Button>
            </Table.Cell>
            <Table.Cell>{apple.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(apple.totalValue)}</Table.Cell>
            <Table.Cell>
                <Form onSubmit={this.onSubmitBuy(1, "apple", this.state.buy[1])}>
                <Input
                  value={this.state.buy[1]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    1: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("apple")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(1, "apple", this.state.sell[1])}>
                <Input
                  value={this.state.sell[1]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    1: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("apple")} basic color="teal">Sell All</Button>
            
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Googol</Table.Cell>
             <Table.Cell style={{ color: googleColor.color}}>${castToDollar(google.price)} {googleColor.arrow != "" ? <Icon name={googleColor.arrow} /> : <p></p>}
             <Button basic color="blue" onClick={this.handleClick("google", "tech")}>Price History</Button></Table.Cell>
            <Table.Cell>{google.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(google.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(2, "google", this.state.buy[2])}>
                <Input
                  value={this.state.buy[2]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    2: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("google")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(2, "google", this.state.sell[2])}>
                <Input
                  value={this.state.sell[2]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    2: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("google")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Wicrodoft</Table.Cell>
            <Table.Cell style={{ color: microsoftColor.color}}>${castToDollar(microsoft.price)} {microsoftColor.arrow != "" ? <Icon name={microsoftColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("microsoft", "tech")}>Price History</Button></Table.Cell>
            <Table.Cell>{microsoft.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(microsoft.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(3, "microsoft", this.state.buy[3])}>
                <Input
                  value={this.state.buy[3]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    3: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("microsoft")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(3, "microsoft", this.state.sell[3])}>
                <Input
                  value={this.state.sell[3]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    3: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("microsoft")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Facenovel</Table.Cell>
            <Table.Cell style={{ color: facebookColor.color}}>${castToDollar(facebook.price)} {facebookColor.arrow != "" ? <Icon name={facebookColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("facebook", "tech")}>Price History</Button></Table.Cell>
            <Table.Cell>{facebook.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(facebook.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(4, "facebook", this.state.buy[4])}>
                <Input
                  value={this.state.buy[4]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    4: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("facebook")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(4, "facebook", this.state.sell[4])}>
                <Input
                  value={this.state.sell[4]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    4: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("facebook")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Boxdrop</Table.Cell>
            <Table.Cell style={{ color: dropboxColor.color}}>${castToDollar(dropbox.price)} {dropboxColor.arrow != "" ? <Icon name={dropboxColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("dropbox", "tech")}>Price History</Button></Table.Cell>
            <Table.Cell>{dropbox.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(dropbox.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(5, "dropbox", this.state.buy[5])}>
                <Input
                  value={this.state.buy[5]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    5: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("dropbox")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(5, "dropbox", this.state.sell[5])}>
                <Input
                  value={this.state.sell[5]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    5: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("dropbox")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    );
  }

  renderTablePharma() {

    const {
      pfizer,
      novartis,
      hoffmann,
      merck,
      johnson
    } = this.props.pharmaStock;

    const {
      pfizer: pfizerPrices,
      novartis: novartisPrices,
      hoffmann: hoffmannPrices,
      merck: merckPrices,
      johnson: johnsonPrices
    } = this.props.pharmaPrices
    
    const pfizerColor = getColorArrow(pfizer.price, pfizerPrices);
    const novartisColor = getColorArrow(novartis.price, novartisPrices);
    const hoffmannColor = getColorArrow(hoffmann.price, hoffmannPrices);
    const merckColor = getColorArrow(merck.price, merckPrices);
    const johnsonColor = getColorArrow(johnson.price, johnsonPrices);
    
    return (  
    <div>
      { this.state.error && 
        <Message error header={this.state.errorHeader} content={this.state.errorMessage} />
      }
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Shares Owned</Table.HeaderCell>
            <Table.HeaderCell>Total Value</Table.HeaderCell>
            <Table.HeaderCell>Buy Shares</Table.HeaderCell>
            <Table.HeaderCell>Sell Shares</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Fizzer</Table.Cell>
            <Table.Cell style={{ color: pfizerColor.color}}>${castToDollar(pfizer.price)} {pfizerColor.arrow != "" ? <Icon name={pfizerColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("pfizer", "pharma")}>Price History</Button></Table.Cell>
            <Table.Cell>{pfizer.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(pfizer.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(1, "pfizer", this.state.buy[1])}>
                <Input
                  value={this.state.buy[1]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    1: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("pfizer")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(1, "pfizer", this.state.sell[1])}>
                <Input
                  value={this.state.sell[1]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    1: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("pfizer")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>MedicinePlus</Table.Cell>
            <Table.Cell style={{ color: novartisColor.color}}>${castToDollar(novartis.price)} {novartisColor.arrow != "" ? <Icon name={novartisColor.arrow} /> : <p></p> } <Button basic color="blue" onClick={this.handleClick("novartis", "pharma")}>Price History</Button></Table.Cell>
            <Table.Cell>{novartis.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(novartis.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(2, "novartis", this.state.buy[2])}>
                <Input
                  value={this.state.buy[2]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    2: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("novartis")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(2, "novartis", this.state.sell[2])}>
                <Input
                  value={this.state.sell[2]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    2: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("novartis")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Hofman-LaRose</Table.Cell>
            <Table.Cell style={{ color: hoffmannColor.color}}>${castToDollar(hoffmann.price)} {hoffmannColor.arrow != "" ? <Icon name={hoffmannColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("hoffmann", "pharma")}>Price History</Button> </Table.Cell>
            <Table.Cell>{hoffmann.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(hoffmann.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(3, "hoffmann", this.state.buy[3])}>
                <Input
                  value={this.state.buy[3]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    3: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }}onClick={this.buyAll("hoffmann")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(3, "hoffmann", this.state.sell[3])}>
                <Input
                  value={this.state.sell[3]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    3: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("hoffmann")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Murck & Co.</Table.Cell>
            <Table.Cell style={{ color: merckColor.color}}>${castToDollar(merck.price)} {merckColor.arrow != "" ? <Icon name={merckColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("merck", "pharma")}>Price History</Button></Table.Cell>
            <Table.Cell>{merck.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(merck.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(4, "merck", this.state.buy[4])}>
                <Input
                  value={this.state.buy[4]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    4: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("merck")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(4, "merck", this.state.sell[4])}>
                <Input
                  value={this.state.sell[4]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    4: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("merck")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Johnny & Johnny</Table.Cell>
            <Table.Cell style={{ color: johnsonColor.color}}>${castToDollar(johnson.price)} {johnsonColor.arrow != "" ? <Icon name={johnsonColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("johnson", "pharma")}>Price History</Button></Table.Cell>
            <Table.Cell>{johnson.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(johnson.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(5, "johnson", this.state.buy[5])}>
                <Input
                  value={this.state.buy[5]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    5: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("johnson")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(5, "johnson", this.state.sell[5])}>
                <Input
                  value={this.state.sell[5]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    5: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("johnson")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    );
  }

  renderTableClothing() {

    const {
      dior,
      nike,
      adidas,
      gucci,
      hermes
    } = this.props.clothingStock;

    const {
      dior: diorPrices,
      nike: nikePrices,
      adidas: adidasPrices,
      gucci: gucciPrices,
      hermes: hermesPrices
    } = this.props.clothingPrices

    const diorColor = getColorArrow(dior.price, diorPrices);
    const nikeColor = getColorArrow(nike.price, nikePrices);
    const adidasColor = getColorArrow(adidas.price, adidasPrices);
    const gucciColor = getColorArrow(gucci.price, gucciPrices);
    const hermesColor = getColorArrow(hermes.price, hermesPrices);


    return (
    <div>
        { this.state.error && 
        <Message error header={this.state.errorHeader} content={this.state.errorMessage} />
        }

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Shares Owned</Table.HeaderCell>
            <Table.HeaderCell>Total Value</Table.HeaderCell>
            <Table.HeaderCell>Buy Shares</Table.HeaderCell>
            <Table.HeaderCell>Sell Shares</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Doir</Table.Cell>
            <Table.Cell style={{ color: diorColor.color}}>${castToDollar(dior.price)} {diorColor.arrow != "" ? <Icon name={diorColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("dior", "clothing")}>Price History</Button></Table.Cell>
            <Table.Cell>{dior.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(dior.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(1, "dior", this.state.buy[1])}>
                <Input
                  value={this.state.buy[1]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    1: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("dior")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(1, "dior", this.state.sell[1])}>
                <Input
                  value={this.state.sell[1]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    1: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("dior")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Nikke</Table.Cell>
            <Table.Cell style={{ color: nikeColor.color}}>${castToDollar(nike.price)} {nikeColor.arrow != "" ? <Icon name={nikeColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("nike", "clothing")}>Price History</Button></Table.Cell>
            <Table.Cell>{nike.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(nike.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(2, "nike", this.state.buy[2])}>
                <Input
                  value={this.state.buy[2]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    2: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("nike")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(2, "nike", this.state.sell[2])}>
                <Input
                  value={this.state.sell[2]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    2: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("nike")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Addiddas</Table.Cell>
            <Table.Cell style={{ color: adidasColor.color}}>${castToDollar(adidas.price)} {adidasColor.arrow != "" ? <Icon name={adidasColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("adidas", "clothing")}>Price History</Button></Table.Cell>
            <Table.Cell>{adidas.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(adidas.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(3, "adidas", this.state.buy[3])}>
                <Input
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    3: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("adidas")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(3, "adidas", this.state.sell[3])}>
                <Input
                  value={this.state.sell[3]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    3: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("adidas")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Guchi</Table.Cell>
            <Table.Cell style={{ color: gucciColor.color}}>${castToDollar(gucci.price)} {gucciColor.arrow != "" ? <Icon name={gucciColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("gucci", "clothing")}>Price History</Button></Table.Cell>
            <Table.Cell>{gucci.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(gucci.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(4, "gucci", this.state.buy[4])}>
                <Input
                  value={this.state.buy[4]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    4: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("gucci")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(4, "gucci", this.state.sell[4])}>
                <Input
                  value={this.state.sell[4]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    4: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("gucci")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Harmes</Table.Cell>
            <Table.Cell style={{ color: hermesColor.color}}>${castToDollar(hermes.price)} {hermesColor.arrow != "" ? <Icon name={hermesColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("hermes", "clothing")}>Price History</Button></Table.Cell>
            <Table.Cell>{hermes.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(hermes.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(5, "hermes", this.state.buy[5])}>
                <Input
                  value={this.state.buy[5]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    5: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("hermes")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(5, "hermes", this.state.sell[5])}>
                <Input
                  value={this.state.sell[5]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    5: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("hermes")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    );
  }

  renderTableFood() {
    const {
      cargill,
      nestle,
      pepsi,
      archer,
      sysco
    } = this.props.foodStock;

    const {
      cargill: cargillPrices,
      nestle: nestlePrices,
      pepsi: pepsiPrices,
      archer: archerPrices,
      sysco: syscoPrices
    } = this.props.foodPrices;

    const cargillColor = getColorArrow(cargill.price, cargillPrices);
    const nestleColor = getColorArrow(nestle.price, nestlePrices);
    const pepsiColor = getColorArrow(pepsi.price, pepsiPrices);
    const archerColor = getColorArrow(archer.price, archerPrices);
    const syscoColor = getColorArrow(sysco.price, syscoPrices);

    return (
    <div>
        { this.state.error && 
        <Message error header={this.state.errorHeader} content={this.state.errorMessage} />
        }

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Shares Owned</Table.HeaderCell>
            <Table.HeaderCell>Total Value</Table.HeaderCell>
            <Table.HeaderCell>Buy Shares</Table.HeaderCell>
            <Table.HeaderCell>Sell Shares</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Cardgill</Table.Cell>
            <Table.Cell style={{ color: cargillColor.color}}>${castToDollar(cargill.price)} {cargillColor.arrow != "" ? <Icon name={cargillColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("cargill", "food")}>Price History</Button></Table.Cell>
            <Table.Cell>{cargill.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(cargill.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(1, "cargill", this.state.buy[1])}>
                <Input
                  value={this.state.buy[1]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    1: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("cargill")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(1, "cargill", this.state.sell[1])}>
                <Input
                  value={this.state.sell[1]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    1: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("cargill")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Nestel</Table.Cell>
            <Table.Cell style={{ color: nestleColor.color}}>${castToDollar(nestle.price)} {nestleColor.arrow != "" ? <Icon name={nestleColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("nestle", "food")}>Price History</Button></Table.Cell>
            <Table.Cell>{nestle.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(nestle.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(2, "nestle", this.state.buy[2])}>
                <Input
                  value={this.state.buy[2]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    2: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("nestle")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(2, "nestle", this.state.sell[2])}>
                <Input
                  value={this.state.sell[2]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    2: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("nestle")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>PepisCo</Table.Cell>
            <Table.Cell style={{ color: pepsiColor.color}}>${castToDollar(pepsi.price)} {pepsiColor.arrow != "" ? <Icon name={pepsiColor.arrow} /> : <p></p>} <Button basic color="blue" onClick={this.handleClick("pepsi", "food")}>Price History</Button></Table.Cell>
            <Table.Cell>{pepsi.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(pepsi.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(3, "pepsi", this.state.buy[3])}>
                <Input
                  value={this.state.buy[3]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    3: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("pepsi")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(3, "pepsi", this.state.sell[3])}>
                <Input
                  value={this.state.sell[3]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    3: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("pepsi")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cooca-Coola</Table.Cell>
            <Table.Cell style={{ color: archerColor.color }}>${castToDollar(archer.price)} {archerColor.arrow != "" ? <Icon name={archerColor.arrow} /> : <p></p> }
            <Button basic color="blue" onClick={this.handleClick("archer", "food")}>Price History</Button></Table.Cell>
            <Table.Cell>{archer.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(archer.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(4, "archer", this.state.buy[4])}>
                <Input
                  value={this.state.buy[4]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  fluid
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    4: {$set: event.target.value}
                  })})}
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("archer")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(4, "archer", this.state.sell[4])}>
                <Input
                  value={this.state.sell[4]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    4: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("archer")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Sisco</Table.Cell>
            <Table.Cell style={{ color: syscoColor.color}}>${castToDollar(sysco.price)} {syscoColor.arrow != "" ? <Icon name={syscoColor.arrow} /> : <p></p>} 
            <Button basic color="blue" onClick={this.handleClick("sysco", "food")}>Price History</Button></Table.Cell>
            <Table.Cell>{sysco.sharesOwned}</Table.Cell>
            <Table.Cell>${castToDollar(sysco.totalValue)}</Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitBuy(5, "sysco", this.state.buy[5])}>
                <Input
                  value={this.state.buy[5]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Buy', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ buy: update(this.state.buy, {
                    5: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.buyAll("sysco")} basic color="teal">Buy All</Button>
            </Table.Cell>
            <Table.Cell>
              <Form onSubmit={this.onSubmitSell(5, "sysco", this.state.sell[5])}>
                <Input
                  value={this.state.sell[5]}
                  action={{ color: 'teal', labelPosition: 'right', content: 'Sell', icon:"cart" }}
                  placeholder="# of Stocks"
                  onChange={event => this.setState({ sell: update(this.state.sell, {
                    5: {$set: event.target.value}
                  })})}
                  fluid
                  size="small"
                  />
              </Form>
              <Button fluid style={{marginTop: "5px" }} onClick={this.sellAll("sysco")} basic color="teal">Sell All</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    );
  }

  renderGraph(stock, type) {
    const {
          techStock,
          pharmaStock,
          foodStock,
          clothingStock,
          cryptoStock,
          cryptoPrices,
          techPrices,
          foodPrices,
          clothingPrices,
          pharmaPrices
    } = this.props;

    var obj = {};
    var i;
     
    if (type === "tech") {
      for (i = 0; i < this.props.techPrices[stock].length; i++) {
        obj[i] = castToDollar(techPrices[stock][i]);
      }
      obj[i] = castToDollar(techStock[stock].price);
    } 
    if (type === "food") {
      for (i = 0; i < this.props.foodPrices[stock].length; i++) {
        obj[i] = castToDollar(foodPrices[stock][i]);
      }
      obj[i + 1] = castToDollar(foodStock[stock].price);
    } 
    if (type === "pharma") {
      for (i = 0; i < this.props.pharmaPrices[stock].length; i++) {
        obj[i] = castToDollar(pharmaPrices[stock][i]);
      }
      obj[i + 1] = castToDollar(pharmaStock[stock].price);
    } 
    if (type === "clothing") {
      for (i = 0; i < this.props.clothingPrices[stock].length; i++) {
        obj[i] = castToDollar(clothingPrices[stock][i]);
      }
      obj[i + 1] = castToDollar(clothingStock[stock].price);
    }
    if (type === "crypto") {
      for (i = 0; i < this.props.cryptoPrices[stock].length; i++) {
        obj[i] = castToDollar(cryptoPrices[stock][i]);
      }
      obj[i + 1] = castToDollar(cryptoStock[stock].price);
    }
    return <LineChart thousands="," prefix="$" xtitle="Turn" ytitle="Price" data={obj} />;
  }

  close = () => {
    this.setState({ open: false });
  }

  render() {
    const panes = [
      { menuItem: 'Tech', render: () => <Tab.Pane>{this.renderTableTech()}</Tab.Pane> },
      { menuItem: 'Pharma', render: () => <Tab.Pane>{this.renderTablePharma()}</Tab.Pane> },
      { menuItem: 'Food', render: () => <Tab.Pane>{this.renderTableFood()}</Tab.Pane> },
      { menuItem: 'Clothing', render: () => <Tab.Pane>{this.renderTableClothing()} </Tab.Pane> },
      { menuItem: 'Crypto', render: () => <Tab.Pane>{this.renderTableCrypto()} </Tab.Pane> }
   ]
    return (
      <div>
        <Link to="/">
        </Link>
        <Tab panes={panes} />
        <Modal open={this.state.open} onClose={this.close}>
        <Modal.Header>Stock History</Modal.Header>
        <Modal.Content>
          {this.renderGraph(this.state.stock, this.state.type)}
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.close}>
            <Icon name='remove' /> Close
          </Button>
        </Modal.Actions>
      </Modal>
      </div>
      );
  }
}

const mapStateToProps = state => {
  return { stats: state.stats, events: state.events, techStock: state.techStock, pharmaStock: state.pharmaStock, foodStock: state.foodStock, clothingStock: state.clothingStock, techPrices: state.techPrices, foodPrices: state.foodPrices, pharmaPrices: state.pharmaPrices, clothingPrices: state.clothingPrices, cryptoPrices: state.cryptoPrices, cryptoStock: state.cryptoStock };
};

export default connect(
  mapStateToProps,
  { addNetWorth, subtractNetWorth, addEvent, boughtTechStock, soldTechStock, boughtFoodStock, soldFoodStock, boughtClothingStock, soldClothingStock, boughtPharmaStock, soldPharmaStock, boughtCryptoStock, soldCryptoStock }
)(Investment);