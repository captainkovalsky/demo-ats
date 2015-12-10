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
    return <div>
      <h3>{this.state.candidate.first_name}</h3>
    </div>
  }

}

export default CandidateItem;