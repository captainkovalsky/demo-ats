import React from 'react';
import vacancies from './../fixtures/vacancies';

class VancanciesList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {vacancies: vacancies};
  }

  render() {
    var applications = this.state.vacancies.map(function (val) {
      return <div key={val._id}>
        <div>{val.title}</div>
      </div>;
    });

    return <div className="3-colums">
      <div className="header">
        <h3>Vacancies</h3>
      </div>
      <div>
        {applications}
      </div>
    </div>
  }

}

export default VancanciesList;