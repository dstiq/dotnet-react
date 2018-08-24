/* eslint-disable */
import React, { PropTypes } from 'react';
import { Grid } from 'react-redux-grid';
import { connect } from 'react-redux';

import {
    columns,
    free_data,
    data,
    pageSize,
} from '../OutputData/ExampleData';

export const GridData = ({ store, gridObj, app }) => {
    let gridHeight;
    let displayData = title => {
      switch (title) {
          case "InputGrid":
              gridHeight = '0px';
              return free_data;
          case "GridData":
          default:
              gridHeight = '500px';
              return gridObj.data;
      }
    };

    const data = gridObj.data ?
        displayData(app.containerTitle) :
        free_data;

    const simpleData = {
        columns,
        data,
        pageSize,
        plugins: {},
        store,
        stateKey: 'simple',
        height: gridHeight
    };

    return (
        <div>
            <Grid { ...simpleData } />
        </div>
        );
};

const { object } = PropTypes;

GridData.propTypes = {
    store: object.isRequired
};

GridData.defaultProps = {};

const mapStateToProps = (state) => ({
    gridObj: state.data,
    app: state.app
});

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(GridData);