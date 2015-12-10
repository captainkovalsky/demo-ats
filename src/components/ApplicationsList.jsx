import React from 'react';
import ApplicationStore from './../stores/ApplicationStore';

class ApplicationsList extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(ApplicationStore.getState());
    this.state = { applications: ApplicationStore.getState() }
  }

  render() {
    var applications = this.state.applications.map(function (val) {
      return <div key={val._id}>
        <div>{val.candidate.first_name} {val.candidate.last_name} @ {val.vacancy.title}</div>
      </div>;
    });

    return <div className="3-colums">
      <div className="header">
        <h3>Applications</h3>
      </div>
      <div>
        {applications}
      </div>
    </div>
  }

}

export default ApplicationsList;