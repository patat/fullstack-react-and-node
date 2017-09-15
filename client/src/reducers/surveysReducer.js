import { FETCH_SURVEYS, DELETE_SURVEYS } from '../actions/types';

// `state` refers to `surveys` prop of the global state
// it is the list of surveys created and sent by a user
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      // TODO: move reversal to mongo
      return action.payload.reverse();
    case DELETE_SURVEYS:
      // payload data is an array of deleted surveys
      if (action.payload.status === 200) {
        return state.filter(
          survey =>
            !action.payload.data.find(
              deletedSurvey => deletedSurvey._id === survey._id
            )
        );
      }
      return state;
    default:
      return state;
  }
}
