import React from 'react';
import { Link } from 'react-router'

class ToggleButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var label = this.props.route === 'app' ? 'dashboard' : 'jobsite';
    return <div className="page">
      <Link to={`/${this.props.route}`}><button>Switch to {label}</button></Link>
    </div>
  }

}

export default ToggleButton;