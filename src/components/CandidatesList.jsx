import React from 'react';
import CandidateStore from './../stores/CandidateStore';
import { Link } from 'react-router'

class CandidatesList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {candidates: CandidateStore.getState()};
  }

  render() {
    var list = this.state.candidates.map(function (val) {
      return <div key={val._id}>
        <div><Link to={`/app/candidates/${val._id}`}>{val.first_name} {val.last_name}</Link></div>
      </div>;
    });

    return <div className="dashboard-list-row">
      <div className="3-colums">
        <div className="header">
          <h3>Candidates</h3>
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

export default CandidatesList;