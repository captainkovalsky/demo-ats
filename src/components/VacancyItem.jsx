import React from 'react';
import VacancyStore from './../stores/VacancyStore';

class VacancyItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { vacancy: null }
  }

  // Used for initial rendering
  componentWillMount() {
    this.setState({
      vacancy: VacancyStore.getVacancy(this.props.params.id)
    })
  }
  
  // Used by the router in case of dynamic segmetns
  componentWillReceiveProps(nextProps) {
    this.setState({
      vacancy: VacancyStore.getVacancy(nextProps.params.id)
    })
  }

  render() {
    console.log(this.state);
    return <div>
      <h3>{this.state.vacancy.title}</h3>
    </div>
  }

}

export default VacancyItem;