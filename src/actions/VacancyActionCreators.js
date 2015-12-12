import AppDispatcher from './../dispatcher/AppDispatcher';
import { ActionTypes } from './../constants/constants';

export function receiveAllVacancies (vacancies) {
  AppDispatcher.dispatch({
    type: ActionTypes.ADD_ALL_VACANCIES,
    vacancies: vacancies
  });
};