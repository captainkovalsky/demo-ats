import React from 'react';
import ApplicationStore from './../stores/ApplicationStore';
import VacancyStore from './../stores/VacancyStore';
import ToggleButton from './ToggleButton';
import { addApplication } from './../actions/ApplicationActionCreators';

class JobsItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { vacancy: null, candidate: null, errors: {} }
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
    console.log(this.recorder);
    this.recorder.destroy();
  }

  _onSubmit(evt) {
    evt.preventDefault();
    let errors = this.validate();

    if (errors) {
      return this.setState({
        errors: errors
      })
    }

    addApplication({
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value,
      video: this.refs.video.value
    }, this.state.vacancy._id)
  }

  validate() {
    let errors = {};
    let refs = this.refs;

    if (refs && !refs.first_name.value)
      errors['first_name'] = 'Please enter your first name'

    if (refs && !refs.last_name.value)
      errors['last_name'] = 'Please enter your last name'

    if (refs && !refs.email.value)
      errors['last_name'] = 'Please enter your last name'

    return errors;
  }

  render() {
    var label = this.state.vacancy.videoDescription || 'Video';
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
          <h3>Apply now</h3>
          <hr/>
          <div className="row">
            <div className="large-6 columns">
              <form onSubmit={this._onSubmit.bind(this)}>
                <label>First name
                  <input type="text" ref="first_name" placeholder="First name" />
                  <span>{this.state.errors.first_name}</span>
                </label>
                <input type="text" ref="last_name" placeholder="Last name" />
                <span>{this.state.errors.last_name}</span>
                <input type="text" ref="email" placeholder="E-mail" />
                <span>{this.state.errors.email}</span>
                <h5>{label}</h5>
                <input type="flipbase" name="video"/>
                <span>{this.state.errors.video}</span>
                <button type="sumbit" >Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  }

}

export default JobsItem;