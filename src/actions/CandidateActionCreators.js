import AppDispatcher from './../dispatcher/AppDispatcher';
import { ActionTypes } from './../constants/constants';
import { createCandidate } from './../utils/CandidateAPIUtils';

export function receiveAllCandidates (candidates) {
  AppDispatcher.dispatch({
    type: ActionTypes.ADD_ALL_CANDIDATES,
    candidates: candidates
  });
};

export function addCandidate (candidate) {
  createCandidate(candidate);
};

export function receiveCandidate (candidate) {
  AppDispatcher.dispatch({
    type: ActionTypes.ADD_CANDIDATE,
    candidate: candidate
  });
};
