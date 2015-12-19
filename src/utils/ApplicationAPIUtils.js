import fixtures from './../fixtures/applications';
import { receiveAllApplications, receiveApplication } from './../actions/ApplicationActionCreators';
import { createCandidate } from './CandidateAPIUtils';

export function fetchAllApplications () {
  let applications = JSON.parse(localStorage.getItem('applications'));

  // Store fixture data
  if (!applications)
    localStorage.setItem('applications', JSON.stringify(fixtures));
  
  applications = applications || fixtures;

  // Callback
  receiveAllApplications(fixtures);
}

  let vacancies = JSON.parse(localStorage.getItem('vacancies'));


export function createApplication(candidate, vacancyID) {
  // Create a new candidate and get the _id
  let candidateID = createCandidate(candidate)._id;

  // Fetch the colleciton
  let applications = JSON.parse(localStorage.getItem('applications'));
  // Create an _id property
  var id = applications.length  + 1;
  let application = Object.assign({vacancy_id: vacancyID, candidate_id: candidateID}, {_id: id});
  // Add new item to collection
  applications.push(application);
  // Store the whole collection
  localStorage.setItem('applications', JSON.stringify(applications));

  // Trigger the callback
  receiveApplication(application);
}