import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setFakeDataRow } from '../../redux/actions/dataAction'
import { columnsIndexName } from '../OutputData/ExampleData';

const InputData = ({addRow}) => {
    const preventSubmit = e => {
        e.preventDefault();
    }
    const keyDownHandler = e => {
        if (e.keyCode === 13) {
            const inputValue = e.target.value;
            const valuesArr = inputValue ? inputValue.split(' ') : '';
            console.log(e.target.value, valuesArr)
            if (valuesArr && valuesArr.length === 3) {
                const currentDateObj = new Date();
                const currentDate = `${currentDateObj.getDay()}.${currentDateObj.getMonth()}.${currentDateObj.getFullYear()}`;
                const obj = {
                    [columnsIndexName.DATE]: `${currentDate}`,
                    [columnsIndexName.EARNINGS]: valuesArr[0],
                    [columnsIndexName.PRECIOUS_METALS]: valuesArr[1],
                    [columnsIndexName.MMVB] : valuesArr[2]
                };
                addRow(obj);
            }
        }
    };

    return (
        <form onSubmit={preventSubmit}>
            <div className="group">
                <input type="text" required
                       onKeyDown={keyDownHandler}/>
                    <span className="highlight">
                    </span>
                    <span className="bar">
                    </span>
                    <label className="info">Введите Данные через пробел</label>
            </div>
        </form>
    )
};

const mapStateToProps = (state) => ({
    state
});


const mapDispatchToProps = (dispatch) => {
    return {
        addRow: (row) => dispatch(setFakeDataRow(row))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(InputData);