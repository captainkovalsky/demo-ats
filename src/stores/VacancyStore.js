import Store from './Store';
import AppDispatcher from './../dispatcher/AppDispatcher';
import { ActionTypes } from './../constants/constants';

var vacancies = [];

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

  addAllVacancies(collection) {
    vacancies = collection;
  }

  updateVacancy(data) {
    Object.assign(this.getVacancy(data._id), data);
  }
}

let store = new VacancyStore();

store.dispatchToken = AppDispatcher.register(function(action) {

  switch (action.type) {

    case ActionTypes.ADD_ALL_VACANCIES:
      store.addAllVacancies(action.vacancies);
      store.emitChange();
      break;

    case ActionTypes.UPDATE_VACANCY:
      store.updateVacancy(action.vacancy);
      store.emitChange();
      break;

    default:
      // do nothing
  }
});

export default store;