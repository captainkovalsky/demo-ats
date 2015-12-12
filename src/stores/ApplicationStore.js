import Store from './Store';
import AppDispatcher from './../dispatcher/AppDispatcher';
import CandidateStore from  './CandidateStore';
import VacancyStore from  './VacancyStore';
import { ActionTypes } from './../constants/constants';

var applications = [];

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

  getApplication(id) {
    return applications.find(application => application._id === parseInt(id));
  }

  addAllApplications(collection) {
    applications = collection;
  }

  addApplication(application) {
    applications.push(application);
  }

}

let store = new ApplicationStore();

store.dispatchToken = AppDispatcher.register(function(action) {
  AppDispatcher.waitFor([
    CandidateStore.dispatchToken,
    VacancyStore.dispatchToken
  ]);

  switch (action.type) {

    case ActionTypes.ADD_ALL_APPLICATIONS:
      store.addAllApplications(action.applications);
      store.emitChange();
      break;

    case ActionTypes.ADD_APPLICATION:
      store.addApplication(action.application);
      store.emitChange();
      break;

    default:
      // do nothing
  }
});

export default store;