import * as types from "../types/types"; 
import * as titles from "./titles";
import { LOCATION_CHANGE } from 'react-router-redux';

const getTitles = (containerTitle) => {
  let key = containerTitle.toLowerCase() + "titles";
  return titles[key]
}

const initialState = {
    ready: false,
    name: "Case #1",
    titles: getTitles('GridData'),
    containerTitle: "GridData",
    containerTitles: titles.sideBarGridTittles,
    isShowMenu: false
};

export default function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOCATION_CHANGE:
      let containerTitle = action.payload.pathname.split("/")[1];
      if (containerTitle === "") containerTitle = "GridData";
      return {
        ...state,
        containerTitle,
        titles: getTitles(containerTitle),
        ready: true
      };
    case types.TITLE_SWITCH:
      return {
        ...state,
        titles: getTitles(action.containerTitle),
        containerTitle: action.containerTitle
      };
      case types.MENU_SWITCH:
        return {
            ...state,
            isShowMenu: !state.isShowMenu
        };
    default:
      return state;
  }
}
