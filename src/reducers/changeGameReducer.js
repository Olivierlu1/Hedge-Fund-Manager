import { generateRandomChangeGameIndex } from '../functions';
import _ from 'lodash';

const initialCopState = {
  events: [
    {
      name: "Officer White (Level 1)",
      price: "6000",
      description: "Officer White is looking to buy a new computer."
    },
    {
      name: "Detective Brown (Level 2)",
      price: "12000",
      description: "Detective Brown is in desparate need of an 80in 4K TV."
    },
    {
      name: "Sargeant McKinsey (Level 3)",
      price: "20000",
      description: "Sargeant McKinsey has some outstanding student loans."
    },
    {
      name: "Lieutenant Jacobson (Level 4)",
      price: "30000",
      description: "Lieutenant Jacobson could really do with a year's rent."
    },
    {
      name: "Captain Marvel (Level 5)",
      price: "56000",
      description: "Captain Marvel is one expensive woman to please."
    },
    {
      name: "Major Tennerson (Level 6)",
      price: "80000",
      description: "Major Tennerson needs some help battling a legal case."
    },
    {
      name: "Colonel Singh (Level 7)",
      price: "86000",
      description: "Colonel Singh would love to fly first class to the Bahamas for a well deserved break."
    },
    {
      name: "Commander Blacksmith (Level 8)",
      price: "90000",
      description: "Commander Blacksmith would love a yacht."
    },
    {
      name: "President Smith (Level 9)",
      price: "96000",
      description: "President Smith wants to build a wall."
    },
    {
      name: "Chief Mbabamedatinkalow (Level 10)",
      price: "105000",
      description: "Chief Mbabamedatinkalow needs the cash. She can't say why."
    },
  ]
}

const initialCharityState = {
  events: [
    {
      name: "Blue Cross",
      price: "80000",
      description: "Blue Cross needs the money for hurricane relief."
    },
    {
      name: "Feeding World",
      price: "100000",
      description: "Help Feeding World stock up on food supplies."
    },
    {
      name: "Salvadore Army",
      price: "160000",
      description: "Salvadore Army needs some help setting up more branches."
    },
    {
      name: "Habitat for Humans",
      price: "180000",
      description: "Help Habitat for Humans build some houses."
    },
    {
      name: "YMAC of the USA",
      price: "200000",
      description: "YMAC is looking for large donors for their new hospital."
    },
    {
      name: "Planned Parenting",
      price: "240000",
      description: "Planned Parenting has a whole list of things that they need."
    },
    {
      name: "Making Wishes Foundation",
      price: "260000",
      description: "Help some people fulfill their dreams with Making Wishes!"
    },
    {
      name: "Young Living",
      price: "290000",
      description: "Help Young Living expand its horizons globally."
    },
    {
      name: "World Wildlife Charity",
      price: "310000",
      description: "A shipment of endangered animals was stolen. Help WWC find them!"
    },
    {
      name: "Teaching America",
      price: "330000",
      description: "Education comes first and foremost. Help Teaching America educate millions."
    }
  ]
}

export const charityReducer = (state = initialCharityState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const copsReducer = (state = initialCopState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}