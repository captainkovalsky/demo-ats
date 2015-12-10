import Store from './Store';
import AppDispatcher from './../dispatcher/AppDispatcher';
import CandidateStore from  './CandidateStore';
import VacancyStore from  './VacancyStore';
import fixtures from './../fixtures/applications';

var applications = fixtures;

class ApplicationStore extends Store {
  constructor() {
    super();
  }

  getState() {
    applications.forEach(function (appl) {
      appl.candidate = CandidateStore.getCandidate(appl.candidate_id),
      appl.vacancy = VacancyStore.getVacancy(appl.vacancy_id)
    });
    return applications;
  }

}

ApplicationStore.dispatchToken = AppDispatcher.register(function(action) {
  AppDispatcher.waitFor([
    CandidateStore.dispatchToken,
    VacancyStore.dispatchToken
  ]);

  switch (action.type) {

    case ActionTypes.CLICK_THREAD:
      ApplicationStore.emitChange();
      break;

    case ActionTypes.RECEIVE_RAW_MESSAGES:
      ApplicationStore.emitChange();
      break;

    default:
      // do nothing
  }
});

export default new ApplicationStore();