import React from 'react';
import ApplicationStore from './../stores/ApplicationStore';
import VacancyStore from './../stores/VacancyStore';
import ToggleButton from './ToggleButton';
import { Link } from 'react-router'

class Jobs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { vacancies: VacancyStore.getState() }
  }

  render() {
    // This format is required to insert unescaped HTML using React!
    var summary = function (vacancy) {
      return {__html: vacancy.description.substring(0, 300) + '... '};
    }

    var list = this.state.vacancies.map(function (val) {
      return <div key={val._id}>
        <div>
          <Link to={`/jobs/${val._id}`}><h1>{val.title}</h1></Link>
          <h6 className="subtitle">{val.location} | published {val.created_at}</h6>
          <div dangerouslySetInnerHTML={summary(val)} />
        </div>
      </div>;
    });

    return <div className="page">
      <ToggleButton route="app"/>
      <div className="vacancy-page">
        {list}
      </div>
    </div>
  }

}

export default Jobs;