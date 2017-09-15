import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSurvey } from '../../actions';

class SurveyListItem extends Component {
  state = {
    showControls: false,
  };

  surveyItemControlsOn(itemID) {
    this.setState(Object.assign({}, this.state, { showControls: true }));
  }

  surveyItemControllsOff(itemID) {
    this.setState(Object.assign({}, this.state, { showControls: false }));
  }

  render() {
    const survey = this.props.survey;
    return (
      <div
        className="card darken-1"
        onMouseEnter={() => this.surveyItemControlsOn(survey._id)}
        onMouseLeave={() => this.surveyItemControllsOff(survey._id)}
      >
        <i
          className={`material-icons right scale-transition ${this.state.showControls
            ? 'scale-in'
            : 'scale-out'}`}
          style={{
            marginTop: 10,
            marginRight: 10,
            cursor: 'pointer',
            transition: '.4s all ease-out',
          }}
          onClick={() => this.props.deleteSurvey(survey._id)}
        >
          delete_forever
        </i>
        <div className="card-content">
          <span className="card-title">
            {survey.title}
          </span>
          <p>
            {survey.body}
          </p>
          <p className="right">
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a>
            Yes: {survey.yes}
          </a>
          <a>
            No: {survey.no}
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { deleteSurvey })(SurveyListItem);
