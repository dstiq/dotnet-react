/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './../../redux/configureStore';
import GridData from '../GridOutput/index';
import InputData from '../InputData/index';
import {
    switchMenu,
} from '../../redux/actions/appActions';


class ExampleGridContainer extends Component {

  componentWillReceiveProps(nextProps, nextState){
    this.props = nextProps; 
  }

  render() {
    const title = this.props.app.containerTitle;
    const getGrid = (title) => {
      switch(title) {
          case "InputGrid":
              return (
                  <div>
                      <GridData { ...{ store }  } title={title} />
                      <InputData/>
                  </div>
              );
          case "GridData" :
          default :
                  return (
                      <GridData { ...{ store }  } title={title} />
         );
      }
    }

    return (
        <div className="gridDataContainer">
            <a onClick={this.props.menuSwitch} class="">
                <i className="awesomeIcon">d</i>
            </a>
            <h2 className="gridH2">{this.props.app.containerTitle}</h2>
            { getGrid(title) }
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
    grid: state.grid,
    app: state.app,
    data: state.data
});

const mapDispatchToProps = (dispatch) => {
  return {
      menuSwitch: () => dispatch(switchMenu()),
      dispatch
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ExampleGridContainer);