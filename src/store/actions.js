import {
  SET_LOADING,
} from 'store/action-types';

export const setLoading = loading => ({
  loading,
  type: SET_LOADING,
});
