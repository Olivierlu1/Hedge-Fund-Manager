import React, { Component } from 'react';
import { Button, Input, Card, Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class InsiderTrading extends Component {

  viewOne = (field, level) => {
    return (
      <Link to={`/insidertrading/${field}/informant${level}`}>
          <Button basic color="green" fluid>
            View
          </Button>
      </Link>
    );
  }

  componentDidMount() {
    if (this.props.stats.criminalLevel >= 100) {
      this.props.history.push('/gameover');
    }
  }

  renderClothing() {
    return (
      <Card.Group centered>
        <Card
          header='Jack Parker'
          meta='Informant Level 1'
          description='Jack Parker is a clothes smuggler hailing from the United Kingdom. Through his time on the street, he has gotten to know the ins and outs of the industry'
          extra={this.viewOne("clothing", 1)}
        />
        <Card
          header='Vishal Dhileepan'
          meta='Informant Level 2'
          description='Vishal Dhileepan is a former employee of a large clothing conglomorate who has leveraged his connections in the industry to make a clean profit.'
          extra={this.viewOne("clothing", 2)}
        />
        <Card
          header='McLovin'
          meta='Informant Level 3'
          description='McLovin is a hip Californian designer who lives off the thrill of running from the FBI. Up to date, he has earned a profit of over USD 300k.'
          extra={this.viewOne("clothing", 3)}
        />
        <Card
          header='Saqib Siddiqi'
          meta='Informant Level 4'
          description='Saqib is an oil tycoon who extended his love of high fashion to a love of making money off others who love fashion as well. His oil connections have given him an in with several luxury brands.'
          extra={this.viewOne("clothing", 4)}
        />
        <Card
          header='Olivier Gabison'
          meta='Informant Level 5'
          description='Olivier is a French-Hong Kong tech CEO who has spent his many Parisian vacations not only splurging on designer goods, but learning the workings of the insider trade. If there is a reliable insider, it is him.'
          extra={this.viewOne("clothing", 5)}
        />
      </Card.Group>
    );
  }

  renderPharma() {
    return (
      <Card.Group centered>
        <Card
          header='Keisha Joonas'
          meta='Informant Level 1'
          description='Keisha is an ex-addict who has used her countless hours and friendships made in rehab to have an in with several large pharmaceutical companies.'
          extra={this.viewOne("pharma", 1)}
        />
        <Card
          header='Jen Platon'
          meta='Informant Level 2'
          description='Jen is a disgraced pharmaceutical employee. She is well-educated and knows how to turn drug news into a profit. For you and for her.'
          extra={this.viewOne("pharma", 2)}
        />
        <Card
          header='Gojko Allochka'
          meta='Informant Level 3'
          description='Gojko graduated from King George IIV University with a degree in pharmaceuticals. He is currently employed as a mail boy in a large pharmaceutical company. Best believe you find out inside news before big pharma CEOs do.'
          extra={this.viewOne("pharma", 3)}
        />
        <Card
          header='Nikhil Álvaro'
          meta='Informant Level 4'
          description='Nikhil is currently the VP of a large stock brokerage. In this dog-eat-dog trading world, he has realised that friendships are everything. Several of his best friends work in pharma. He is always looking for a new partner in crime' 
          extra={this.viewOne("pharma", 4)}
        />
        <Card
          header='Hanna Milogost'
          meta='Informant Level 5'
          description='Hanna is perhaps the most powerful person in the pharmaceuticals industry. If there is news related to any drug, she knows about it 10 days before everyone else does. Although she charges a lot, you can trust her.'
          extra={this.viewOne("pharma", 5)}
        />
      </Card.Group>
    );
  }

  renderFood() {
    return (
      <Card.Group centered>
        <Card
          header='Gopal Nives'
          meta='Informant Level 1'
          description='Gopal works as a factory worker in a large food processing plant. Rumours float around amongst the workers and he is willing to let you in on it. For a small price.'
          extra={this.viewOne("food", 1)}
        />
        <Card
          header='Irma Ola'
          meta='Informant Level 2'
          description='Irma is one of the sneakiest women alive. She knows how to sweet talk her way into finding any information around. Although not directly affiliated with the food industry, she has a hunger to make money.'
          extra={this.viewOne("food", 2)}
        />
        <Card
          header='Zvonimira Archibald'
          meta='Informant Level 3'
          description='Zvonimira (or Zwon, if you prefer) is a sales representative for one of the largest food companies in the world. Her close friendship with her boss gives her a special advantage when the market opens.'
          extra={this.viewOne("food", 3)}
        />
        <Card
          header='Sudhir Leanne'
          meta='Informant Level 4'
          description='Sudhir is working as a consultant for several large food conglomerates. When they have an announcement to make, he is who they go to for help. For a price, he will make you one of the easiest profits you will ever make.'
          extra={this.viewOne("food", 4)}
        />
        <Card
          header='Hyacinthus Arnulf'
          meta='Informant Level 5'
          description='Hyacinthus is a giant, to say the least. At a whopping 980 pounds, this food CEO has two goals. Reach over $20 million from insider trading and help you do the same.'
          extra={this.viewOne("food", 5)}
        />
      </Card.Group>
    );
  }

  renderTech() {
    return (
      <Card.Group centered>
        <Card
          header='Waldeburg Judah'
          meta='Informant Level 1'
          description='Waldeburg is a lone wolf from Arizona. He sits in his room and hacks away. Although he has no connections, he might stumble upon some interesting news on his hacking journey.'
          extra={this.viewOne("tech", 1)}
          style={ {overflowWrap: "break-word"} }
        />
        <Card
          header='Hyram Iphigeneia'
          meta='Informant Level 2'
          description='Hyram is a meagre software engineer at a startup in Silicon Valley. However, he recently bumped into a well-connected VP. Maybe, for a price, this relationship can benefit you as well.'
          extra={this.viewOne("tech", 2)}
          style={ {overflowWrap: "break-word"} }
        />
        <Card
          header='Joe White'
          meta='Informant Level 3'
          description='Joe is one sly snake. He is actually employed at 5 large tech companies, all under fake names. Will this sly man get you the information you need?'
          extra={this.viewOne("tech", 3)}
          style={ {overflowWrap: "break-word"} }
        />
        <Card
          header='Erika Edwin'
          meta='Informant Level 4'
          description='Erika is on the cusp of promotion. She has shuttled around over 10 different companies, and knows the ins and outs of the tech industry. More than sneaky and volatile, you know she is reliable.'
          extra={this.viewOne("tech", 4)}
          style={ {overflowWrap: "break-word"} }
        />
        <Card
          header='Eiran Ganizani'
          meta='Informant Level 5'
          description='Eiran was the CEO of one of the largest tech firms. He was recently imprisoned for insider trading... that does not mean that he still does not have friends on the outside.'
          extra={this.viewOne("tech", 5)}
          style={ {overflowWrap: "break-word"} }
        />
        </Card.Group>
    );
  }

  render() {
    const panes = [
      { menuItem: 'Tech', render: () => <Tab.Pane>{this.renderTech()}</Tab.Pane> },
      { menuItem: 'Pharma', render: () => <Tab.Pane>{this.renderPharma()}</Tab.Pane> },
      { menuItem: 'Food', render: () => <Tab.Pane>{this.renderFood()}</Tab.Pane> },
      { menuItem: 'Clothing', render: () => <Tab.Pane>{this.renderClothing()}</Tab.Pane> }
    ]

    return (
      <Tab panes={panes} />
    );
  }
}

const mapStateToProps = state => {
  return { stats: state.stats };
};

export default connect(
  mapStateToProps
)(InsiderTrading);