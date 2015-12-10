import React from 'react';
import { Link } from 'react-router'
import VacancyStore from './../stores/VacancyStore';

class VancanciesList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {vacancies: VacancyStore.getState()};
  }

  render() {
    var list = this.state.vacancies.map(function (val) {
      return <div key={val._id}>
        <div><Link to={`/app/vacancies/${val._id}`}>{val.title}</Link></div>
      </div>;
    });

    return <div className="dashboard-list-row">
      <div className="3-colums">
        <div className="header">
          <h3>Vacancies</h3>
        </div>
        <div>
          {list}
        </div>
      </div>
      <div className="dashboard-item">
        {this.props.children}
      </div>
    </div>
  }

}

export default VancanciesList;