import React from 'react';
import { Link } from 'react-router'

class Dashboard extends React.Component {

  render() {
    // `this.props.children` will be poluted by the router, based on the router;
    return <div className="page">
      <div className="page-row">

        <div className="dashboard-menu">
          <div className="header">
            <ul>
              <li><Link to="/app/applications">Applications</Link></li>
              <li><Link to="/app/candidates">Candidates</Link></li>
              <li><Link to="/app/vacancies">Vacancies</Link></li>
            </ul>
          </div>
        </div>

        <div className="dashboard-list">
          {this.props.children}
        </div>
      </div>
    </div>
  }

}

export default Dashboard;