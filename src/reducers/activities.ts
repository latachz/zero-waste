import {SAVE_SCAN_SUCCESS} from '../constants/actionTypes';

const INITIAL_STATE = {
  activities: [],
};

export default function activitiesReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SAVE_SCAN_SUCCESS:
      return {
        ...state,
        activities: state.activities.concat(action.payload.scan),
      };

    default:
      return state;
  }
}
