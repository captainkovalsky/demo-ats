import React from 'react';
import ApplicationStore from './../stores/ApplicationStore';
import VacancyStore from './../stores/VacancyStore';
import ToggleButton from './ToggleButton';
import { addApplication } from './../actions/ApplicationActionCreators';

class JobsItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { vacancy: null, candidate: null }
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

  componentDidMount() {
    this.recorder = Flipbase.recorder({
      recorderId: 'xxx-xxxx-xxxx'
    });
  }

  componentWillUnmount() {
    this.recorder.destroy();
  }

  _onSubmit(evt) {
    evt.preventDefault();
    addApplication({
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value
    }, this.state.vacancy._id)
  }

  render() {
    // This format is required to insert unescaped HTML using React!
    var content = function (vacancy) {
      return {__html: vacancy.description};
    }

    return <div className="page">
      <ToggleButton route="app"/>
      <div className="vacancy-page">
        <h1>{this.state.vacancy.title}</h1>
        {this.state.vacancy.created_at}
        <div dangerouslySetInnerHTML={content(this.state.vacancy)} />
        <div>
          <form onSubmit={this._onSubmit.bind(this)}>
            <input type="text" ref="first_name" placeholder="First name" />
            <input type="text" ref="last_name" placeholder="Last name" />
            <input type="text" ref="email" placeholder="E-mail" />
            <label>Video</label>
            <input type="flipbase" name="video"/>
            <button type="sumbit" >Send</button>
          </form>
        </div>
      </div>
    </div>
  }

}

export default JobsItem;