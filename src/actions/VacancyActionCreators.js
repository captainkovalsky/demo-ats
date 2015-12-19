import AppDispatcher from './../dispatcher/AppDispatcher';
import { ActionTypes } from './../constants/constants';
import { saveVacancy as storeVacancy } from './../utils/VacancyAPIUtils';

export function receiveAllVacancies (vacancies) {
  AppDispatcher.dispatch({
    type: ActionTypes.ADD_ALL_VACANCIES,
    vacancies: vacancies
  });
};

export function updateVacancy (data) {
  AppDispatcher.dispatch({
    type: ActionTypes.UPDATE_VACANCY,
    vacancy: data
  });
}

export function saveVacancy (id, data) {
  storeVacancy(id, data);
}