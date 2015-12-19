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
    var profileVideo;

    if (candidate.profile_video) {
      profileVideo = <div><h5>Profile video</h5><p>{candidate.profile_video}</p></div>;
    } else {
      profileVideo = <div><button>Request profile video</button></div>;
    }

    return <div>
      <div className="cover">
      <div className="modal">
        <h3>{candidate.first_name} {candidate.last_name}</h3>
        <hr/>
        <p>E-mail: {candidate.email}</p>
        {profileVideo}
      </div>
      </div>
    </div>
  }

}

export default CandidateItem;