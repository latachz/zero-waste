import {SAVE_SCAN_SUCCESS} from '../constants/actionTypes';
import {saveScan} from '../api/activities';

export const saveScanAction = (name: string, userId: string) => async (
  dispatch: any,
) => {
  try {
    const scan = await saveScan(name, userId);

    dispatch({
      type: SAVE_SCAN_SUCCESS,
      payload: {
        scan,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
