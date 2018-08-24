import * as types from "../types/types";
import { data } from '../../components/OutputData/ExampleData';

const initialState = {
    data: data
};

export default function dataReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.FAKE_DATA_ROW_APPEND:
            const row = action.row;
            return {
                data: [...state.data, row]
            };
        default:
            return state;
    }
}
