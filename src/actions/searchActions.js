import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function storeSearchResults(settings, results) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.STORE_SEARCHED_TERM,
      results,
      settings
    });
  };
}
