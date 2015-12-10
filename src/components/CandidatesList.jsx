import React from 'react';
import candidates from './../fixtures/candidates';

class CandidatesList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {candidates: candidates};
  }

  render() {
    var applications = this.state.candidates.map(function (val) {
      return <div key={val._id}>
        <div>{val.first_name} {val.last_name}</div>
      </div>;
    });

    return <div className="3-colums">
      <div className="header">
        <h3>Candidates</h3>
      </div>
      <div>
        {applications}
      </div>
    </div>
  }

}

export default CandidatesList;