import AppDispatcher from './../dispatcher/AppDispatcher';
import { ActionTypes } from './../constants/constants';
import { createApplication } from './../utils/ApplicationAPIUtils';

export function receiveAllApplications (applications) {
  AppDispatcher.dispatch({
    type: ActionTypes.ADD_ALL_APPLICATIONS,
    applications: applications
  });
};

export function addApplication (candidate, vacancyID) {
  createApplication(candidate, vacancyID);
};

export function receiveApplication (application) {
  AppDispatcher.dispatch({
    type: ActionTypes.ADD_APPLICATION,
    application: application
  });
}
