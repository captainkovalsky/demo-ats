import React from 'react';
import VacancyStore from './../stores/VacancyStore';
import { updateVacancy, saveVacancy } from './../actions/VacancyActionCreators';

class VacancyItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { vacancy: null }
  }

  // Used for initial rendering
  componentWillMount() {
    this.setState({
      vacancy: VacancyStore.getVacancy(this.props.params.id),
    })
  }
  
  // Used by the router in case of dynamic segmetns
  componentWillReceiveProps(nextProps) {
    this.setState({
      vacancy: VacancyStore.getVacancy(nextProps.params.id)
    })
  }

  onChangeHandler(evt) {
    updateVacancy({
      _id: this.state.vacancy._id,
      videoEnabled:  this.refs.videoEnable.checked,
      videoRequired:  this.refs.videoRequired.checked,
      videoDescription: this.refs.videoDescription.value,
      open: this.refs.opened.value
    })
  }

  saveHandler() {
    saveVacancy(this.state.vacancy._id, this.state.vacancy);
  }

  render() {
    let vacancy = this.state.vacancy;
    var videoChecked = !!(vacancy.videoEnabled) ? 'checked' : '';
    var videoRequired = !!(vacancy.videoRequired) ? 'checked' : '';

    return <div>
      <div className="cover">
        <div className="modal">
          <h3>Edit vacancy</h3>
          <form onChange={this.onChangeHandler.bind(this)} >
            <label>Title</label>
            <input defaultValue={vacancy.title} />
            <label>Status
              <select defaultValue={vacancy.open} ref="opened">
                <option value="true">open</option>
                <option value="false">closed</option>
              </select>
            </label>
            <label>Description</label>
            <textarea rows="7" defaultValue={vacancy.description} />
            <h5>Form settings</h5>
            <label>Video description</label>
            <textarea rows="2" ref="videoDescription" defaultValue={vacancy.videoDescription}/>
            <label>Enable video</label>
            <div className="switch">
              <input id="videoEnable" type="checkbox" ref="videoEnable" defaultChecked={videoChecked}/>
              <label htmlFor="videoEnable"></label>
            </div>
            <label>Require video</label>
            <div className="switch">
              <input id="videoRequired" type="checkbox" ref="videoRequired" defaultChecked={videoRequired}/>
              <label htmlFor="videoRequired"></label>
            </div>
            <button type="button" onClick={this.saveHandler.bind(this)}>Save</button>
          </form>
        </div>
      </div>
    </div>
  }

}

export default VacancyItem;