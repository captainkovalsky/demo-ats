import React from 'react';
import { Link } from 'react-router'
import ApplicationStore from './../stores/ApplicationStore';

class ApplicationsList extends React.Component {
  
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    ApplicationStore.addChangeListener(this.onChange);
    this.state = { applications: ApplicationStore.getState() }
  }

  onChange() {
    this.setState({
      applications: ApplicationStore.getState()
    })
  }

  componentWillUnmount() {
    ApplicationStore.removeChangeListener(this.onChange);
  }

  render() {
    var list = this.state.applications.map(function (val) {
      return <div key={`application_${val._id}`}>
        <div><Link to={`/app/applications/${val._id}`}>{val.candidate.first_name} {val.candidate.last_name} @ {val.vacancy.title}</Link></div>
      </div>;
    });

    return <div className="dashboard-list-row">
      <div className="3-colums">
        <div className="header">
          <h3>Applications</h3>
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

export default ApplicationsList;