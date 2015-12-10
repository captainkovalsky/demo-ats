import Store from './Store';
import AppDispatcher from './../dispatcher/AppDispatcher';
import fixtures from './../fixtures/vacancies';

var vacancies = fixtures;

class VacancyStore extends Store {
  constructor() {
    super();
  }

  getState() {
    return vacancies;
  }

  getVacancy(id) {
    return vacancies.find(vacancy => vacancy._id === parseInt(id));
  }
}

VacancyStore.dispatchToken = AppDispatcher.register(function(action) {

  switch (action.type) {

    case ActionTypes.CLICK_THREAD:
      VacancyStore.emitChange();
      break;

    case ActionTypes.RECEIVE_RAW_MESSAGES:
      VacancyStore.emitChange();
      break;

    default:
      // do nothing
  }
});

export default new VacancyStore();