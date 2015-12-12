import fixtures from './../fixtures/vacancies';
import { receiveAllVacancies } from './../actions/VacancyActionCreators';

export function fetchAllVacancies () {
  // Store fixture data
  localStorage.setItem('vacancies', JSON.stringify(fixtures));
  // Callback
  receiveAllVacancies(fixtures);
}
