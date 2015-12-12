import Store from './Store';
import AppDispatcher from './../dispatcher/AppDispatcher';
import { ActionTypes } from './../constants/constants';

var candidates = [];

class CandidateStore extends Store {
  constructor() {
    super();
  }

  getState() {
    return candidates;
  }

  getCandidate(id) {
    return candidates.find(candidate => candidate._id === parseInt(id));
  }

  addCandidate(candidate) {
    candidates.push(candidate);
  }

  addCandidates(collection) {
    candidates = collection;
  }
}

let store = new CandidateStore();

store.dispatchToken = AppDispatcher.register(function(action) {

  switch (action.type) {

    case ActionTypes.ADD_ALL_CANDIDATES:
      store.addCandidates(action.candidates);
      store.emitChange();
      break;

    case ActionTypes.ADD_CANDIDATE:
      store.addCandidate(action.candidate);
      store.emitChange();
      break;

    default:
      // do nothing
  }
});

export default store;