import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage';
import Investment from './Investment'
import InsiderTrading from './InsiderTrading'
import ChangeGame from './ChangeGame'
import Instructions from './Instructions';
import Bugs from './Bugs';

import InformantOneTech from './informants/tech/InformantOneTech';
import InformantTwoTech from './informants/tech/InformantTwoTech';
import InformantThreeTech from './informants/tech/InformantThreeTech';
import InformantFourTech from './informants/tech/InformantFourTech';
import InformantFiveTech from './informants/tech/InformantFiveTech';

import InformantOneFood from './informants/food/InformantOneFood';
import InformantTwoFood from './informants/food/InformantTwoFood';
import InformantThreeFood from './informants/food/InformantThreeFood';
import InformantFourFood from './informants/food/InformantFourFood';
import InformantFiveFood from './informants/food/InformantFiveFood';

import InformantOnePharma from './informants/pharma/InformantOnePharma';
import InformantTwoPharma from './informants/pharma/InformantTwoPharma';
import InformantThreePharma from './informants/pharma/InformantThreePharma';
import InformantFourPharma from './informants/pharma/InformantFourPharma';
import InformantFivePharma from './informants/pharma/InformantFivePharma';

import InformantOneClothing from './informants/clothing/InformantOneClothing';
import InformantTwoClothing from './informants/clothing/InformantTwoClothing';
import InformantThreeClothing from './informants/clothing/InformantThreeClothing';
import InformantFourClothing from './informants/clothing/InformantFourClothing';
import InformantFiveClothing from './informants/clothing/InformantFiveClothing';

import NotFound from './NotFound';
import GameOver from './GameOver';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/investments' component={Investment}/> 
      <Route exact path='/insidertrading' component={InsiderTrading}/>
      <Route path='/changethegame' component={ChangeGame}/>
      <Route path='/gameover' component={GameOver} />
      <Route path='/instructions' component={Instructions} />
      <Route path='/bugs' component={Bugs} />
      <Route path='/insidertrading/tech/informant1' component={InformantOneTech}/>
      <Route path='/insidertrading/tech/informant2' component={InformantTwoTech}/>
      <Route path='/insidertrading/tech/informant3' component={InformantThreeTech}/>
      <Route path='/insidertrading/tech/informant4' component={InformantFourTech}/>
      <Route path='/insidertrading/tech/informant5' component={InformantFiveTech}/>

      <Route path='/insidertrading/food/informant1' component={InformantOneFood}/>
      <Route path='/insidertrading/food/informant2' component={InformantTwoFood}/>
      <Route path='/insidertrading/food/informant3' component={InformantThreeFood}/>
      <Route path='/insidertrading/food/informant4' component={InformantFourFood}/>
      <Route path='/insidertrading/food/informant5' component={InformantFiveFood}/>

      <Route path='/insidertrading/clothing/informant1' component={InformantOneClothing}/>
      <Route path='/insidertrading/clothing/informant2' component={InformantTwoClothing}/>
      <Route path='/insidertrading/clothing/informant3' component={InformantThreeClothing}/>
      <Route path='/insidertrading/clothing/informant4' component={InformantFourClothing}/>
      <Route path='/insidertrading/clothing/informant5' component={InformantFiveClothing}/>

      <Route path='/insidertrading/pharma/informant1' component={InformantOnePharma}/>
      <Route path='/insidertrading/pharma/informant2' component={InformantTwoPharma}/>
      <Route path='/insidertrading/pharma/informant3' component={InformantThreePharma}/>
      <Route path='/insidertrading/pharma/informant4' component={InformantFourPharma}/>
      <Route path='/insidertrading/pharma/informant5' component={InformantFivePharma}/>
      <Route component={NotFound} />
    </Switch>
  </main>
)

export default Main;
