import React from 'react';
import candidates from './../fixtures/candidates';

class Hello extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {candidates: candidates};
  }

  render() {
    var nodes = this.state.candidates.map(function (val) {
      return <tr key={val._id}><td className="small-font">{val.name}</td></tr>;
    });

    return <div>
        <table>
          <thead>
            <tr>
              <th>Candidates</th>
            </tr>
          </thead>
          <tbody>
            {nodes}
          </tbody>
        </table>
      </div>
  }

}

export default Hello;