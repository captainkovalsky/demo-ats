import React from 'react';
import { render } from 'react-dom';
import Dashboard from './components/Dashboard.jsx';
import Candidates from './components/CandidatesList.jsx';
import Applications from './components/ApplicationsList.jsx';
import ApplicationItem from './components/ApplicationItem.jsx';
import CandidateItem from './components/CandidateItem.jsx';
import Vacancies from './components/VacancyList.jsx';
import VacancyItem from './components/VacancyItem.jsx';
import Jobsite from './components/Jobsite.jsx';
import {Router, Route, Link} from 'react-router';

render((<Router>
  <Route path="app" component={Dashboard}>
    <Route path="/app/applications" component={Applications}>
      <Route path="/app/applications/:id" component={ApplicationItem}/>
    </Route>
    <Route path="/app/candidates" component={Candidates}>
      <Route path="/app/candidates/:id" component={CandidateItem}/>
    </Route>
    <Route path="/app/vacancies" component={Vacancies}>
      <Route path="/app/vacancies/:id" component={VacancyItem} />
    </Route>
  </Route>
  <Route path="jobs" component={Jobsite} />

</Router>), document.getElementById('app'));