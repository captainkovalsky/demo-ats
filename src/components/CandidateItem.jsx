import React from 'react';
import CandidateStore from './../stores/CandidateStore';

class CandidateItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { candidate: null }
  }

  // Used for initial rendering by the router
  componentWillMount() {
    this.setState({
      candidate: CandidateStore.getCandidate(this.props.params.id)
    })
  }
  
  // Used by the router in case of dynamic segmetns
  componentWillReceiveProps(nextProps) {
    this.setState({
      candidate: CandidateStore.getCandidate(nextProps.params.id)
    })
  }

  render() {
    var candidate = this.state.candidate;
    return <div>
      <div className="cover">
      <div className="modal">
        <h3>{candidate.first_name} {candidate.last_name}</h3>
      </div>
      </div>
    </div>
  }

}

export default CandidateItem;