import React from 'react';
import ApplicationStore from './../stores/ApplicationStore';

class ApplicationsList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { app: null }
  }

  componentWillMount() {
    this.setState({
      app: ApplicationStore.getApplication(this.props.params.id)
    })
  }

  render() {
    return <div>
      <h3>{this.state.app.candidate.first_name} applied at {this.state.app.vacancy.title}</h3>
    </div>
  }

}

export default ApplicationsList;