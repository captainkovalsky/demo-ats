import React from 'react';
import Nav from './../components/NavigationMenu.jsx';

class App extends React.Component {

  render() {
    return <div className="3-colums">
      <div className="4-columns">
        <Nav />
      </div>
      <div className="4-columns">
      </div>
    </div>
  }

}

export default App;