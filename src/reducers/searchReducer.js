import objectAssign from 'object-assign';
import initialState from './initialState';
import { STORE_SEARCHED_TERM } from "../constants/actionTypes";

export default function searchReducer(state = initialState.searchState, action) {
    switch(action.type) {
        case STORE_SEARCHED_TERM:
            return objectAssign({}, state, {results: action.results});
        default:
            return state;
    }
}