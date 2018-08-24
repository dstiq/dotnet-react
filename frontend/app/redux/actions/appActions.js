import * as types from '../types/types';

export const switchTitle = (containerTitle) => {
    return {
        type: types.TITLE_SWITCH,
        containerTitle
    };
}

export const switchMenu = () => {
    return {
        type: types.MENU_SWITCH,
    };
}