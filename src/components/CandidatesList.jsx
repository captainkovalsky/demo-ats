import React from 'react';
import CandidateStore from './../stores/CandidateStore';
import { Link } from 'react-router'

class CandidatesList extends React.Component {
  
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    CandidateStore.addChangeListener(this.onChange);
    this.state = {candidates: CandidateStore.getState()};
  }

  onChange() {
    this.setState({
      candidates: CandidateStore.getState()
    })
  }

  componentWillUnmount() {
    CandidateStore.removeChangeListener(this.onChange);
  }

  render() {
    var list = this.state.candidates.map(function (val) {
      return <div key={`candidate_${val._id}`}>
        <div><Link to={`/app/candidates/${val._id}`}>{val.first_name} {val.last_name}</Link></div>
      </div>;
    });

    return <div>
    <div className="dashboard-list-row">
      <div className="3-colums">
        <div className="header">
          <h3>Candidates</h3>
        </div>
        <div>
          {list}
        </div>
      </div>
    </div>
          {this.props.children}

    </div>
  }

}

export default CandidatesList;