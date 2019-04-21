import { generateRandomIndex, generateRandomValue, generateEventRound } from '../functions';
import _ from 'lodash';

const initialClothingEventState = {
      events: [
        {
          stock: "dior",
          effect: "positive",
          news: "Diorr hires SS models from underprivileged areas of Chicago",
          percentChange: .28,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dior",
          effect: "positive",
          news: "CEO of Diorr offers USD 4 million to rebuild iconic French cathedral",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dior",
          effect: "positive",
          news: "Diorr releases new line of clothing made out of recycled materials",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dior",
          effect: "positive",
          news: "Diorr promotes record-number of young employees in campaign for more youthful designs",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dior",
          effect: "positive",
          news: "Gift bag for Oscars will exclusively contain Diorr products",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dior",
          effect: "negative",
          news: "Diorr designer yells at model for “not looking pretty enough”, faces backlash",
          percentChange: .29,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dior",
          effect: "negative",
          news: "Is Diorr under threat? How designer brands are dying (op-ed)",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dior",
          effect: "negative",
          news: "Diorr glitch halves price of all clothes on website, sold out within 4 minutes",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dior",
          effect: "negative",
          news: "If you care about your health, don’t wear Diorr (op-ed)",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dior",
          effect: "negative",
          news: "Diorr CFO exposes the company’s financial struggles",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nike",
          effect: "positive",
          news: "Nikke-sponsored Paralympic athlete wins gold in 100m event and 400m relay",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nike",
          effect: "positive",
          news: "Marathon runner breaks 2 hour barrier during Nikke event",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nike",
          effect: "positive",
          news: "Nikke under the spotlight after Tigger Wood clinches 15th major victory",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nike",
          effect: "positive",
          news: "Nikke sponsors human trafficking awareness walkathon",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nike",
          effect: "positive",
          news: "CEO of Nikke takes dogs out for a run every morning with his own pair of shoes",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nike",
          effect: "negative",
          news: "Nikke found in violation of ethical business practices, running sweatshops in Asia",
          percentChange: .22,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nike",
          effect: "negative",
          news: "Nikke sponsored athlete caught using steroids before important powerlifting meet",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nike",
          effect: "negative",
          news: "Poll finds that Gen Z thinks that Nikke is not “hip” enough",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nike",
          effect: "negative",
          news: "Faulty NikkeAir shoes explode during Olympics",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nike",
          effect: "negative",
          news: "Head of Nikke marketing claims that “steroids aren’t as bad as they seem”",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "adidas",
          effect: "positive",
          news: "Addiddas extends sponsorship of Argentina National Soccer Team ahead of international tournament",
          percentChange: .31,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "adidas",
          effect: "positive",
          news: "Addiddas cancels sponsorship of popular ballerina under fire, saying that “We do not endorse hatred and discrimination of any kind”",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "adidas",
          effect: "positive",
          news: "Addiddas CEO spotted wearing Yeeezy Booost shoes”",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "adidas",
          effect: "positive",
          news: "Addiddas sponsored rugby-player Mauro Pink claims All-Star title",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "adidas",
          effect: "positive",
          news: "Poll of 100,000 student athletes finds that Addiddass is the most popular source of sport apparel",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "adidas",
          effect: "negative",
          news: "CFO of Addiddas under fire for bigoted remarks",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "adidas",
          effect: "negative",
          news: "Addiddas officially rebrands to Adddddiddddassssss, against advice of marketing department",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "adidas",
          effect: "negative",
          news: "Limited edition pink Addiddas sneakers take over 18 hours to sell out, in contrast with the expected 8 minutes",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "adidas",
          effect: "negative",
          news: "Increased presence of bootleg Addiddas on the streets leaves consumers questioning their authenticity ",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "adidas",
          effect: "negative",
          news: "Addiddas-sponsored Olympic fencer Jimmy John Jack charged with smuggling exotic animals",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "gucci",
          effect: "positive",
          news: "Why Guchi is surviving the fall of luxury retail (op-ed)",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "gucci",
          effect: "positive",
          news: "Guchi snags model priority for Paris Fashion Week",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "gucci",
          effect: "positive",
          news: "A Guchi belt was used to save a cat during a fire… here’s how it happened",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "gucci",
          effect: "positive",
          news: "CEO of Guchi gives career talk to students of Generic High School in Iowa",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "gucci",
          effect: "positive",
          news: "How Guchi is revolutionizing the modern fashion industry (op-ed)",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "gucci",
          effect: "negative",
          news: "Chief Marketing Officer of Guchi under fire for classist remarks",
          percentChange: .30,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "gucci",
          effect: "negative",
          news: "Research shows that average lifespan for Guchi products is under 1 year",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "gucci",
          effect: "negative",
          news: "Guchi products are overrated (op-ed)",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "gucci",
          effect: "negative",
          news: "Largest donor for Westburrow Baptist Church found to be Guchi",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "gucci",
          effect: "negative",
          news: "Guchi loses patent for its belt buckle technology",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hermes",
          effect: "positive",
          news: "Harmes donates USD 1 million of clothes to Salvadore Army",
          percentChange: .27,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hermes",
          effect: "positive",
          news: "Harmes expands business into military uniforms",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hermes",
          effect: "positive",
          news: "CEO of Harmes works at a homeless shelter on the weekends",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hermes",
          effect: "positive",
          news: "Robert Federer first tennis player to be sponsored by Harmes",
          percentChange: .17,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hermes",
          effect: "positive",
          news: "Harmes belts spotted on the runway at London Fashion Week",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hermes",
          effect: "negative",
          news: "Harmes kicked out of Paris Fashion Week for lack of unique designs",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hermes",
          effect: "negative",
          news: "Harmes faces 9 lawsuits for its lack of durability",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hermes",
          effect: "negative",
          news: "New lawsuit against Harmes for false advertising",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hermes",
          effect: "negative",
          news: "CEO of Harmes found stealing from homeless shelter he works at",
          percentChange: .17,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hermes",
          effect: "negative",
          news: "If you care about freedom, don’t buy Harmes (op-ed)",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        }
      ],
      round: 1,
      index: generateRandomIndex(50), // sub in entries here
      entries: 50
};

export const clothingRandomEventReducer = (state = initialClothingEventState, action) => {
  switch (action.type) {
    case "NEXT_TURN_CLOTHING": // called when next turn is pressed
      if (state.round === 5) {
        _.pullAt(state.events, state.index);
        state = _.set(state, "entries", state.entries - 1);
        var randomNumber = generateRandomIndex(state.entries);
        state = _.set(state, "index", randomNumber);
        state = _.set(state, "round", 1);
        return state;       
      } else {
        state = _.set(state, "round", state.round + 1);
        return state;
      }
    case "UPDATE_RANDOM_CLOTHING":
      var holder = generateRandomValue();
      let arr = [...state.events];
      arr[state.index] = { ...arr[state.index], random: holder};
      return {
        ...state,
        events: arr
      }
    default:
      return state;
  }
}

const initialFoodEventState = {
      events: [
        {
          stock: "cargill",
          effect: "positive",
          news: "Cardgill hot chocolate rated “best hot chocolate” by Twitter users",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "cargill",
          effect: "positive",
          news: "Cardgill partners with World Health Organization to develop healthy chocolate",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "cargill",
          effect: "positive",
          news: "Cardgill releases meal-replacement drink",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "cargill",
          effect: "positive",
          news: "Farmers praise Cardgill for fair trade practices",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "cargill",
          effect: "positive",
          news: "Cardgill donates $100million to breast cancer research",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "cargill",
          effect: "negative",
          news: "CEO of Cardgill found guilty of animal cruelty",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "cargill",
          effect: "negative",
          news: "Farmers claim that Cardgill blackmailed them into producing crops",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "cargill",
          effect: "negative",
          news: "Candles produced by Cardgill contain “illegal amounts of THC”, police commissioner says",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "cargill",
          effect: "negative",
          news: "Drought halts production of Cardgill cereal",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "cargill",
          effect: "negative",
          news: "Cardgill workers strike in protest of low wages and lack of benefits",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nestle",
          effect: "positive",
          news: "Nestel releases tobacco-flavored ice-cream to help consumers quit smoking",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nestle",
          effect: "positive",
          news: "Nestel advertisement campaign dubbed “cutest food advertisement of all time” by Twitter users",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nestle",
          effect: "positive",
          news: "Nestel donates 10,000 bottles of Miloo malt drink to earthquake survivors",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nestle",
          effect: "positive",
          news: "Jeef Bezoes invests USD 500 million in Nestel",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nestle",
          effect: "positive",
          news: "Nestel releases coffee with highest recorded caffeine content",
          percentChange: .17,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nestle",
          effect: "negative",
          news: "Factory operated by Nestel erupted in flames due to lack of safety checks, report finds",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nestle",
          effect: "negative",
          news: "Nestel workers strike in protest to only being served Nestel food at meals",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nestle",
          effect: "negative",
          news: "Poll finds that people prefer “not eating” over “eating Nestel cereal”",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nestle",
          effect: "negative",
          news: "Nestel tobacco-flavored ice-cream actually contains tobacco, research finds",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "nestle",
          effect: "negative",
          news: "Nestel Pierier sparkling water found to contain traces of mud",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pepsi",
          effect: "positive",
          news: "New PepisCo organic energy drink pre-sale exceeds investor expectations",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pepsi",
          effect: "positive",
          news: "PepisCo fourth quarter earning results more than double the predicted",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pepsi",
          effect: "positive",
          news: "PepisCo CEO joins Twitter users for a “health challenge”",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pepsi",
          effect: "positive",
          news: "PepisCo appoints new head of marketing following poor response to Layz Chips marketing campaign",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pepsi",
          effect: "positive",
          news: "PepisCo chosen as official sponsor for 2026 FIFA World Cup",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pepsi",
          effect: "negative",
          news: "Primary PepisCo factory found in violation of FDA regulations",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pepsi",
          effect: "negative",
          news: "Pepis soft drink contains more than 100g of sugar, research finds",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pepsi",
          effect: "negative",
          news: "Eating PepisCo Layz Chips could lead to heart failure, research finds",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pepsi",
          effect: "negative",
          news: "Pepis Zero soft drink actually contains more sugar than the regular version, research finds",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pepsi",
          effect: "negative",
          news: "PepisCo CEO announces plans for hostile takeover of family knitting startup in response to bad Twitter reviews",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "archer",
          effect: "positive",
          news: "Cooca-Coola named as official sponsor for 2020 Olympics",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "archer",
          effect: "positive",
          news: "Cooca-Coola has solid third quarter earnings results, surpassing expectations",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "archer",
          effect: "positive",
          news: "Cooca-Coola CEO donates USD 2 million to Red Cross tsunami aid",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "archer",
          effect: "positive",
          news: "Poll of TV watchers finds that Cooca-Coola has the most “creative” advertising in the food industry",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "archer",
          effect: "positive",
          news: "Cooca-Coola partners up with Dinsey to release special “Star Battles” drinks",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "archer",
          effect: "negative",
          news: "Racist Cooca-Coola advertisements backfires as celebrities boycott the brand",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "archer",
          effect: "negative",
          news: "Cooca-Coola shuts down factory in China due to lack of employment interest",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "archer",
          effect: "negative",
          news: "Rare dolphin found to have choked on Cooca-Coola bottle cap",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "archer",
          effect: "negative",
          news: "Cooca-Coola CFO found guilty of tax evasion",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "archer",
          effect: "negative",
          news: "Cooca-Coola reintroduces cocaine in their drinks",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "sysco",
          effect: "positive",
          news: "Sisco GMO fruits receive FDA approval",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "sysco",
          effect: "positive",
          news: "In campaign for environmental sustainability, Sisco opens 50 composts around California",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "sysco",
          effect: "positive",
          news: "MasterCook uses Sisco meat for its contestants, and you should use it too (Op-ed)",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "sysco",
          effect: "positive",
          news: "CEO of Sisco opens farm, employs undocumented workers in stand against xenophobia",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "sysco",
          effect: "positive",
          news: "Sisco is named “healthiest food brand” by Mom’s Magazine",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "sysco",
          effect: "negative",
          news: "Sisco is found to be a shell company for the Hong Kong triads",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "sysco",
          effect: "negative",
          news: "Male, 44, gets salmonella after eating fish from Sisco",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "sysco",
          effect: "negative",
          news: "Sisco opens branch in North Korea against US Government wishes",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "sysco",
          effect: "negative",
          news: "Sisco factory fails health inspection for the third time",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "sysco",
          effect: "negative",
          news: "Error in production replaces iron in Sisco-Produced cereal with mercury",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        }
      ],
      round: 1,
      index: generateRandomIndex(50), // sub in entries here
      entries: 50
};

export const foodRandomEventReducer = (state = initialFoodEventState, action) => {
  switch (action.type) {
    case "NEXT_TURN_FOOD": // called when next turn is pressed
      if (state.round === 5) {
        var tempIndex = state.index;
        _.pullAt(state.events, tempIndex);
        state = _.set(state, "entries", state.entries - 1);
        var randomNumber = generateRandomIndex(state.entries);
        state = _.set(state, "index", randomNumber);
        state = _.set(state, "round", 1);
        return state;       
      } else {
        state = _.set(state, "round", state.round + 1);
        return state;
      }
    case "UPDATE_RANDOM_FOOD":
      var holder = generateRandomValue();
      let arr = [...state.events];
      arr[state.index] = { ...arr[state.index], random: holder};
      return {
        ...state,
        events: arr
      }
    default:
      return state;
  }
}

const initialTechEventState = {
      events: [
        {
          stock: "apple",
          effect: "positive",
          news: "Pear announces new diversity branch on main campus",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "apple",
          effect: "positive",
          news: "Pear beats Googol to revolutionary cloud computing contract",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "apple",
          effect: "positive",
          news: "Pear announces release of pPhone 2XS",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "apple",
          effect: "positive",
          news: "Pear announces release of pPad X",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "apple",
          effect: "positive",
          news: "Pear: future of automated driving? (op-ed)",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "apple",
          effect: "negative",
          news: "Internet outrage as Pear employee posts racist Twitter messages",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "apple",
          effect: "negative",
          news: "Pear board member seen at far-right rally",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "apple",
          effect: "negative",
          news: "Pear job cuts leave 10,000 workers jobless",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "apple",
          effect: "negative",
          news: "Pear appoints Donald Trump as new CTO",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "apple",
          effect: "negative",
          news: "Pear rebrands as 'Banana'",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "google",
          effect: "positive",
          news: "Googol search engine speed hits record-high",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "google",
          effect: "positive",
          news: "Googol announces new computer with 1mm screen",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "google",
          effect: "positive",
          news: "Googol sunglasses sales surpass 1,000,000",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "google",
          effect: "positive",
          news: "Googol found not guilty of misuse of user data by European courts",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "google",
          effect: "positive",
          news: "Googol announces puppy adoption scheme for employees",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "google",
          effect: "negative",
          news: "Googol cancels puppy adoption scheme for employees, citing “lack of cuteness”",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "google",
          effect: "negative",
          news: "Googol AI shuts down World Bank",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "google",
          effect: "negative",
          news: "Googol glitch replaces search engine logo with X-rated image",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "google",
          effect: "negative",
          news: "All of Googol’s board members step down amidst allegations of fraud",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "google",
          effect: "negative",
          news: "New release of Googol sunglasses slowly blind users, research finds",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "microsoft",
          effect: "positive",
          news: "Wicrodoft Wbox XXX named “Best Gaming Console” over Funstation Infinity",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "microsoft",
          effect: "positive",
          news: "Wicrodoft releases computer with 512GB of RAM, coined most powerful computer in the industry",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "microsoft",
          effect: "positive",
          news: "Wicrodoft relocates headquarters to California to boost employee satisfaction",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "microsoft",
          effect: "positive",
          news: "Wicrodoft appoints first transgender CEO",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "microsoft",
          effect: "positive",
          news: "Wicrodoft announces release of Wicrodoft Curtains",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "microsoft",
          effect: "negative",
          news: "Wicrodoft CEO found guilty of trespassing in historic site",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "microsoft",
          effect: "negative",
          news: "Wicrodoft Curtains found to contain pre-install spyware",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "microsoft",
          effect: "negative",
          news: "Wicrodoft announces hostile takeover of local farmer’s market",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "microsoft",
          effect: "negative",
          news: "New Xbox only compatible with 18+ games",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "microsoft",
          effect: "negative",
          news: "Wicrodoft Office removes all fonts apart from “Comic Sans”",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "facebook",
          effect: "positive",
          news: "Northwestern University adopts Facenovel as official method of professor-student correspondence",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "facebook",
          effect: "positive",
          news: "Facenovel founder Bark Nukerberg adopts 18 children",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "facebook",
          effect: "positive",
          news: "Facenovel announces “Facenovel University” for low-income students",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "facebook",
          effect: "positive",
          news: "Number of players of Facenovel games surpass Wii players",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "facebook",
          effect: "positive",
          news: "Facenovel installs new set of privacy updates",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "facebook",
          effect: "negative",
          news: "Hackers sieze personal data of 300 million Facenovel users",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "facebook",
          effect: "negative",
          news: "Facenovel CTO at center of ice-cream scandal",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "facebook",
          effect: "negative",
          news: "Facenovel glitch causes 2 day shutdown of the site",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "facebook",
          effect: "negative",
          news: "Facenovel advertisements all promote use of fentanyl",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "facebook",
          effect: "negative",
          news: "Facenovel users drop to record low",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dropbox",
          effect: "positive",
          news: "Boxdrop upload speed goes below the speed of light",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dropbox",
          effect: "positive",
          news: "Boxdrop promotes record number of female employees",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dropbox",
          effect: "positive",
          news: "Boxdrop announces new premium health care for its employees",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dropbox",
          effect: "positive",
          news: "Boxdrop CEO spotted feeding stray dogs",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dropbox",
          effect: "positive",
          news: "Boxdrop announces new branch in Turkmenistan",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dropbox",
          effect: "negative",
          news: "Boxdrop employee deletes source code ",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dropbox",
          effect: "negative",
          news: "Boxdrop CTO spotted eating live rats",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dropbox",
          effect: "negative",
          news: "Boxdrop glitch renames all user’s files to “Rat turd big pizza man.gif”",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dropbox",
          effect: "negative",
          news: "New Boxdrop CFO is a white nationalist",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "dropbox",
          effect: "negative",
          news: "Boxdrop announces campaign to “stop recycling” in order to save energy for data storage",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        }
      ],
      round: 1,
      index: generateRandomIndex(50), // sub in entries here
      entries: 50
};

export const techRandomEventReducer = (state = initialTechEventState, action) => {
  switch (action.type) {
    case "NEXT_TURN_TECH": // called when next turn is pressed
      if (state.round === 5) {
        _.pullAt(state.events, state.index);
        state = _.set(state, "entries", state.entries - 1);
        var randomNumber = generateRandomIndex(state.entries);
        state = _.set(state, "index", randomNumber);
        state = _.set(state, "round", 1);
        return state;       
      } else {
        state = _.set(state, "round", state.round + 1);
        return state;
      }
    case "UPDATE_RANDOM_TECH":
    var holder = generateRandomValue();
      let arr = [...state.events];
      arr[state.index] = { ...arr[state.index], random: holder};
      return {
        ...state,
        events: arr
     }
    default:
      return state;
  }
}

const initialPharmaEventState = {
      events: [
        {
          stock: "pfizer",
          effect: "positive",
          news: "Fizzer releases new drug to cure the common cold",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pfizer",
          effect: "positive",
          news: "Fizzer-produced Xanax price drops to new low in new accessibility campaign",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pfizer",
          effect: "positive",
          news: "New Fizzer advertisement campaign promotes healthy living",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pfizer",
          effect: "positive",
          news: "Fizzer CEO personally donates blood every two months",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pfizer",
          effect: "positive",
          news: "Fizzer appoints first nonbinary board member",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pfizer",
          effect: "negative",
          news: "Fizzer produces fentanyl for clinical research, gets stolen",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pfizer",
          effect: "negative",
          news: "Fizzer researcher accidentally inserts human gene into whale",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pfizer",
          effect: "negative",
          news: "New Fizzer research drug causes patients to develop third eye",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pfizer",
          effect: "negative",
          news: "Fizzer-operated clinics reuse needles to “save money”",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "pfizer",
          effect: "negative",
          news: "Public outrage as Fizzer announces new vaccine for “low IQ”",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "novartis",
          effect: "positive",
          news: "MedicinePlus releases revolutionary inhaler to cure asthma",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "novartis",
          effect: "positive",
          news: "MedicinePlus invests USD100million into cancer research",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "novartis",
          effect: "positive",
          news: "MedicinePlus opens first research laboratory in Asia",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "novartis",
          effect: "positive",
          news: "MedicinePlus CEO visits children’s hospital, buys them toys",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "novartis",
          effect: "positive",
          news: "MedicinePlus reduces price of Systane by 24%",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "novartis",
          effect: "negative",
          news: "MedicinePlus’ products ingredients found to include fish guts",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "novartis",
          effect: "negative",
          news: "MedicinePlus laboratory fails health inspection",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "novartis",
          effect: "negative",
          news: "MedicinePlus twitter post: “Global warming is a myth”",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "novartis",
          effect: "negative",
          news: "MedicinePlus production of drugs produces more greenhouse gases than China, research finds",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "novartis",
          effect: "negative",
          news: "MedicinePlus resumes testing on puppies",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hoffmann",
          effect: "positive",
          news: "Hofman-LaRose reduces price of Enfurvitide in campaign to increase accessibility to HIV treatment",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hoffmann",
          effect: "positive",
          news: "Hofman-LaRose develops new treatment to kill breast cancer tumors",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hoffmann",
          effect: "positive",
          news: "Hofman-LaRose releases new version of Akutane",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hoffmann",
          effect: "positive",
          news: "Hofman-LaRose reduces price of Valganciclovir",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hoffmann",
          effect: "positive",
          news: "CEO of Hofman-LaRose donates USD 2million to hospice center",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hoffmann",
          effect: "negative",
          news: "Hofman-LaRose found to test drugs on rats",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hoffmann",
          effect: "negative",
          news: "Hofman-LaRose CEO found guilty of public urination",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hoffmann",
          effect: "negative",
          news: "Hofman-LaRose seizes public school land to develop a new testing laboratory",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hoffmann",
          effect: "negative",
          news: "Hofman-LaRose receives donation from Westburrow Baptist Church to develop “hate” drugs",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "hoffmann",
          effect: "negative",
          news: "Dog passes away after faulty testing of Hofman-LaRose drug",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "merck",
          effect: "positive",
          news: "Demand increases for Murck Januvia",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "merck",
          effect: "positive",
          news: "Murck’s HPV vaccine Gardasil looking even more promising after further research",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "merck",
          effect: "positive",
          news: "New Murck common cold drug shows promise",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "merck",
          effect: "positive",
          news: "Warn Buffett invests USD 5 billion in Murck",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "merck",
          effect: "positive",
          news: "Poll with 120k sample population shows that millennials and Gen Z are interested in investing in Murck rather than its competitors",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "merck",
          effect: "negative",
          news: "Murck CEO accused of money laundering",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "merck",
          effect: "negative",
          news: "Patients file a lawsuit for heavy side effects of a Murck drug",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "merck",
          effect: "negative",
          news: "Legal disputes with an international company causes Murck to lose the patent of one of their drugs",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "merck",
          effect: "negative",
          news: "Murck’s new drug fails to get an FDA approval",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "merck",
          effect: "negative",
          news: "Murck’s drug Vioxx causes death from a heart attack",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "johnson",
          effect: "positive",
          news: "Johnny & Johnny’s first quarter earnings surpasses investor’s expectations",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "johnson",
          effect: "positive",
          news: "Johnny & Johnny produced eczema cream more effective than medication, study finds",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "johnson",
          effect: "positive",
          news: "Johnny & Johnny donate surgical devices to children’s hospital in Chicago",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "johnson",
          effect: "positive",
          news: "Bill Gate invests USD 1 billion in Johnny & Johnny",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "johnson",
          effect: "positive",
          news: "Johnny & Johnny wound closure technology patent is filed successfully",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "johnson",
          effect: "negative",
          news: "Contamination found in endomechanical devices produced by Johnny & Johnny",
          percentChange: .25,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "johnson",
          effect: "negative",
          news: "“R&D is less of a concern to us than satisfying our investors”, says Johnny & Johnny CEO",
          percentChange: .23,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "johnson",
          effect: "negative",
          news: "High levels of mercury found in skincare products developed by Johnny & Johnny",
          percentChange: .20,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "johnson",
          effect: "negative",
          news: "Johnny & Johnny CFO has paid less in taxes than you; why is that? (op-ed)",
          percentChange: .18,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        },
        {
          stock: "johnson",
          effect: "negative",
          news: "Johnny & Johnny brand Neutralgena-produced facial wipes found to contain traces of cyanide",
          percentChange: .16,
          random: generateRandomValue(),
          eventRound: generateEventRound()
        }
      ],
      round: 1,
      index: generateRandomIndex(50), // sub in entries here
      entries: 50
};

export const pharmaRandomEventReducer = (state = initialPharmaEventState, action) => {
  switch (action.type) {
    case "NEXT_TURN_PHARMA": // called when next turn is pressed
      if (state.round === 5) {
        state.events.splice(state.index, 1);
        state = _.set(state, "entries", state.entries - 1);
        var randomNumber = generateRandomIndex(state.entries);
        state = _.set(state, "index", randomNumber);
        state = _.set(state, "round", 1);
        return state;       
      } else {
        state = _.set(state, "round", state.round + 1);
        return state;
      }
    case "UPDATE_RANDOM_PHARMA":
      var holder = generateRandomValue();
      let arr = [...state.events];
      arr[state.index] = { ...arr[state.index], random: holder};
      return {
        ...state,
        events: arr
      }
    default:
      return state;
  }
}