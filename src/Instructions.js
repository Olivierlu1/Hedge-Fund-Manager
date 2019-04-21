import React, { Component } from 'react';
import { Container, Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Instructions extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Message color="teal" header="Do not refresh the page when playing this game!" content="You will lose all your current progress and you will have to restart your game. Pressing the back button in your browser is fine" />
        <h1>Welcome to the Hedge Fund Game!</h1>
        <h2>Instructions</h2>
        <p style={{fontSize: "18px"}}>You’re in charge of a hedge fund. Your goal is to make as much money as possible without being caught by the cops. In this game, you can buy and sell stocks, hire informants, pay off police, and donate to charities.</p>
        <h2>Player Statistics</h2>
        <p style={{fontSize: "15px"}}><span style={{ fontWeight: "bold"}} >Net Cash:</span> How much money you have available to spend.</p>
        <p style={{fontSize: "15px"}}><span style={{ fontWeight: "bold"}} >Net Worth:</span> The total value of your assets and net cash.</p>
        <p style={{fontSize: "15px"}}><span style={{ fontWeight: "bold"}}>Public Reputation:</span> How the public perceives you. It affects how much your criminal level will increase by every turn.
        </p>
        <p style={{fontSize: "15px"}}><span style={{ fontWeight: "bold"}} >Criminal Level:</span> How close the cops are to catching you. Your criminal level increases naturally every turn (which is affected by public reputation), and increases immediately every time you hire an informant. You lose the game once your criminal level reaches 100%.
        </p>
        <h2>Investments</h2>
        <p style={{fontSize: "15px"}}>In this section, there are 5 sectors you can purchase stocks from: tech, pharmaceuticals, clothing, food, and crypto. While these stocks (other than crypto) fluctuate, some are randomly chosen to have either an upwards or downwards trajectory in the long run - so it’s your job to figure out what these stocks are.</p>
        <p style={{fontSize: "15px"}}>Crypto, on the other hand, is extremely volatile, as they are in the real world. So be careful when you purchase crypto coins. You could either get rich quick, or lose all of your money very quickly.</p>
        <h2>Insider Trading</h2>
        <p style={{fontSize: "15px"}}>In the game, 4 world-wide events are occurring in the background (crypto aside, there’s one per sector). Each event causes a massive increase / decrease in the stock of the individual company that is affected by this.</p>
        <p style={{fontSize: "15px"}}>You can hire informants to help you find out whether Pear is releasing a new iPear soon, or if Diorr’s CEO just tweeted that he agrees with the idea of communism. Use this information to help you decide whether to purchase a lot of a stock, or sell all the stock quickly before you lose money. Each event has a lifetime span of 5 rounds, but you won’t really know which round you’re on, so be sure to act on the information quickly! The crypto sector has no informants, as no one knows what’s actually going on.</p>
        <p style={{fontSize: "15px"}}>Each sector has informants with levels 1-5. Informants are not always guaranteed to actually tell you information about current events. Higher level informants are more likely to give you useful information, and lower level informants are not as skilled at obtaining information.</p>
        <p style={{fontSize: "15px"}}>The drawback with informants, however, is that every time you hire an informant, your criminal level increases. Criminal level reflects how close the cops are to catching you. Once you reach a criminal level of 100%, you lose. <span style={{ fontWeight: "bold"}}>Lower level informants increase your criminal level more, and higher level informants increase your criminal level less (as they are more ‘sneaky’).</span> It is your job to carefully pick the right situation of when to hire an informant.</p>
        <h2>Change the Game</h2>
        <p style={{fontSize: "15px"}}>Here is where you get to manipulate the world to your liking. In addition to criminal level, there is also a trait you have called public reputation. Public rep which reflects how well the public likes you. Donating to charities will immediately increase your public reputation, and paying off cops will immediately decrease your criminal level.</p>
        <p style={{fontSize: "15px"}}>Why do you care about public reputation? Every turn, your criminal level increases naturally based on a formula that utilizes public reputation. The higher your public reputation, the more pressure the public puts on the cops to not investigate you. Your public reputation cannot decrease and is capped at 100%. In summary, public reputation decreases the amount your criminal level increases by every turn, and paying off cops will immediately decrease your criminal level.</p>
        <h2>Conclusion</h2>
        <p style={{fontSize: "15px"}}>In this game, you can’t constantly hire informants (or else you’ll get caught). You have to invest wisely, manipulate the public, and be lucky. Compete with your friends to see how much money you can make!</p>
        <br />
        <Link to="/">
          <Button style={{ marginRight: "10px"}} color="black" basic>Back</Button>
        </Link>
        <Link to="/bugs">
          <Button color="blue" basic>Currently Known Bugs</Button>
        </Link>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />

      </Container>
    );
  }
}

export default Instructions;