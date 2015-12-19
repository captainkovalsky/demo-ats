import fixtures from './../fixtures/vacancies';
import { receiveAllVacancies } from './../actions/VacancyActionCreators';

export function fetchAllVacancies () {
  let vacancies = JSON.parse(localStorage.getItem('vacancies'));

  // Store fixture data
  if (!vacancies)
    localStorage.setItem('vacancies', JSON.stringify(fixtures));

  vacancies = vacancies || fixtures;

  // Callback
  receiveAllVacancies(vacancies);
}

export function fetchVacancy(id) {
  let vacancies = JSON.parse(localStorage.getItem('vacancies')) || [];
  return vacancies.find(vacancy => vacancy._id === parseInt(id));
}

export function saveVacancy(id, data) {
  let vacancies = JSON.parse(localStorage.getItem('vacancies')) || [];

  vacancies.forEach(function (vacancy, index, arr) {
    if (vacancy._id === parseInt(id)) {
      Object.assign(vacancy, data);
    }
  });

  localStorage.setItem('vacancies', JSON.stringify(vacancies));
}