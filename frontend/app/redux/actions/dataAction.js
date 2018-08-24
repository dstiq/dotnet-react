import * as types from '../types/types';

export const setFakeDataRow = (incomingRow) => {
    return {
        type: types.FAKE_DATA_ROW_APPEND,
        row: incomingRow
    };
};
