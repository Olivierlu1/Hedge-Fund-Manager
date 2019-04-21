import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from "react-redux";
import { castToDollar, convertDateToString } from './functions';
import { Link } from 'react-router-dom';


function Header(props) {
  var color;
  if (props.stats.netCash > props.stats.lastNetWorth) {
    color = "green";
  } else if (props.stats.netCash < props.stats.lastNetWorth) {
    color = "red";
  } else {
    color = "black";
  }

  return (
    <Menu style={{marginTop: "10px"}}>
      <Menu.Item name="hedgefund">
        <Link to="/">Hedge Fund</Link>
      </Menu.Item>
      <Menu.Item name="netcash">
        Net Cash: ${castToDollar(props.stats.netWorth)}
      </Menu.Item>
      <Menu.Item name="networth">
        <span style={{color: color}}> Net Worth: ${castToDollar(props.stats.netCash)}</span>
      </Menu.Item>
      <Menu.Item name="criminalLevel">
        Criminal Level: {props.stats.criminalLevel}%
      </Menu.Item>
      <Menu.Item name="publicRep">
        Public Rep: {props.stats.publicRep}%
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="date">
          {convertDateToString(props.stats.date.month, props.stats.date.year)}
        </Menu.Item>
        <Menu.Item name="instructions">
          <Link to="/instructions">
            Instructions
          </Link>
        </Menu.Item>
      </Menu.Menu>

    </Menu>
  );
};

const mapStateToProps = state => {
  return { stats: state.stats };
};

export default connect(
  mapStateToProps
)(Header);