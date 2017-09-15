import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';
import SurveyListItem from './SurveyListItem';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }


  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
        return ( <SurveyListItem survey={survey} key={survey._id}/>
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
