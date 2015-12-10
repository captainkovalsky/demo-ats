import React from 'react';
import ReactDOM from 'react-dom';
import Candidates from './components/CandidatesList.jsx';
import Applications from './components/ApplicationsList.jsx';
import Vacancies from './components/VacanciesList.jsx';
import {Router, Route, Link} from 'react-router';

ReactDOM.render((<Router>
  <Route path="/" component={Candidates} />
  <Route path="/applications" component={Applications} />
  <Route path="/vacancies" component={Vacancies} />
</Router>), document.getElementById('content'));