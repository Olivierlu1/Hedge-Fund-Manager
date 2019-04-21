# Hedge-Fund-Manager
Manage your own hedge fund, invest in stocks, hire insiders, and don't get caught!

Built for the Repl.it Online Hackathon

# About Us
We are two Northwestern University students, majoring in CS, who are very excited to show everyone this game. We had a lot of fun coding this and hope that everyone enjoys playing it!


# Instructions

You’re in charge of a hedge fund. Your goal is to make as much money as possible without being caught by the cops. In this game, you can buy and sell stocks, hire informants, pay off police, and donate to charities. You are trying to make $10 million. Think you can do it? 

## Player Statistics

**Net Cash:** How much money you have available to spend.  

**Net Worth:** The total value of your assets and net cash.

**Public Reputation:** How the public perceives you. It affects how much your criminal level will increase by every turn.

**Criminal Level:** How close the cops are to catching you. Your criminal level increases naturally every turn (which is affected by public reputation), and increases immediately every time you hire an informant. You lose the game once your criminal level reaches 100%.

## Investments

In this section, there are 5 sectors you can purchase stocks from: tech, pharmaceuticals, clothing, food, and crypto. While these stocks (other than crypto) fluctuate, some are randomly chosen to have either an upwards or downwards trajectory in the long run - so it’s your job to figure out what these stocks are.

Crypto, on the other hand, is extremely volatile, as they are in the real world. So be careful when you purchase crypto coins. You could either get rich quick, or lose all of your money very quickly.

## Insider Trading

In the game, 4 world-wide events are occurring in the background (crypto aside, there’s one per sector). Each event causes a massive increase / decrease in the stock of the individual company that is affected by this.

You can hire informants to help you find out whether Pear is releasing a new iPear soon, or if Diorr’s CEO just tweeted that he agrees with the idea of communism. Use this information to help you decide whether to purchase a lot of a stock, or sell all the stock quickly before you lose money. Each event has a lifetime span of 5 rounds, but you won’t really know which round you’re on, so be sure to act on the information quickly! The crypto sector has no informants, as no one knows what’s actually going on. 

Each sector has informants with levels 1-5. Informants are not always guaranteed to actually tell you information about current events. Higher level informants are more likely to give you useful information, and lower level informants are not as skilled at obtaining information.

The drawback with informants, however, is that every time you hire an informant, your criminal level increases. Criminal level reflects how close the cops are to catching you. Once you reach a criminal level of 100%, you lose. **Lower level informants increase your criminal level more, and higher level informants increase your criminal level less (as they are more ‘sneaky’).** It is your job to carefully pick the right situation of when to hire an informant.

## Change The Game

Here is where you get to manipulate the world to your liking. In addition to criminal level, there is also a trait you have called public reputation, which reflects how well the public likes you. Donating to charities will immediately increase your public reputation, and paying off cops will immediately decrease your criminal level.

Why do you care about public reputation? Every turn, your criminal level increases naturally based on a formula: how many insiders you pay for and your public reputation. The higher your public reputation, the more pressure the public puts on the cops to not investigate you. Your public reputation cannot decrease and is capped at 100%. In summary, public reputation decreases the amount your criminal level increases by every turn, and paying off cops will immediately decrease your criminal level.

## Strategy

We recommend to start by initially investing in a wide range of stocks in different sectors. Hire informants at your own risk, and remember to try to get your public reputation as high as possible. Invest in crypto at your own risk - it's essentially gambling! 

## Conclusion

In this game, you can’t constantly hire informants (or else you’ll get caught). You have to invest wisely, manipulate the public, and be lucky. Compete with your friends to see how much money you can make!

## Known Bugs

The Price Graph doesn't show the correct data for some stocks (Pear, Bitcoin, Ethereum, Tron, and Googol) -- This is completely at fault with the package we are using. We have no control over this, and have no idea why this is happening.

Values written in the a sectors tab for buying stocks will carry on in another sector -- Currently working on this.
 
 Please report to us if you find any more bugs!
 
## Play the Game!

Play the game here: [https://repl.it/@OlivierGabison/Hedge-Fund-Manager-Official](https://repl.it/@OlivierGabison/Hedge-Fund-Manager-Official)
For the best experience, it is highly recommended you play in fullscreen.
It takes a while to load - please be patient!

Built with React & Redux
Created by Olivier Gabison and Vishal Dhileepan
