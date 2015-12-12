import fixtures from './../fixtures/candidates';
import { receiveAllCandidates, receiveCandidate } from './../actions/CandidateActionCreators';

export function fetchAllCandidates () {
  // Store fixture data
  localStorage.setItem('candidates', JSON.stringify(fixtures));
  // Callback
  receiveAllCandidates(fixtures);
}

export function createCandidate (candidate) {
  let candidates = JSON.parse(localStorage.getItem('candidates'));
  // Create an _id property
  var id = candidates.length  + 1;
  candidate = Object.assign(candidate, {_id: id});
  // Add new item to collection
  candidates.push(candidate);
  // Store the whole collection
  localStorage.setItem('candidates', JSON.stringify(candidates));
  // Trigger the callback
  receiveCandidate(candidate);

  return candidate;
}