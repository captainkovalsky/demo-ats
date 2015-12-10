import Store from './Store';
import AppDispatcher from './../dispatcher/AppDispatcher';
import fixtures from './../fixtures/candidates';

var candidates = fixtures;

class CandidateStore extends Store {
  constructor() {
    super();
  }

  getState() {
    return candidates;
  }

  getCandidate(id) {
    return candidates.find(candidate => candidate._id === id);
  }
}

CandidateStore.dispatchToken = AppDispatcher.register(function(action) {

  switch (action.type) {

    case ActionTypes.ADD_CANDIDATE:
      CandidateStore.emitChange();
      break;

    default:
      // do nothing
  }
});

export default new CandidateStore();