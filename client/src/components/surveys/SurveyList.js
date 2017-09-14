import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <i
            className="material-icons right"
            style={{ marginTop: 10, marginRight: 10, cursor: 'pointer' }}
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
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    surveys: state.surveys,
  };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList);
