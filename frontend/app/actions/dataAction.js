import * as types from '../actionTypes/types';

export const setFakeDataRow = (incomingRow) => {
    return {
        type: types.FAKE_DATA_ROW_APPEND,
        row: incomingRow
    };
};
