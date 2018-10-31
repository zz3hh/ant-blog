import { queryAddressList, addAddress, updateAddress, removeAddress, setDefault } from '@/services/api';

export default {
  namespace: 'address',

  state: {
    addressList: [],
    loading: true,
    submitLoading: false,
    adsDetail: {},
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({
        type: 'changeStatus',
        payload: {
          loading: true,
        }
      });
      const response = yield call(queryAddressList, payload);
      yield put({
        type: 'changeAddressList',
        payload: response.data,
      });
      yield put({
        type: 'changeStatus',
        payload: {
          loading: false,
        }
      });
    },
    *addAddress({ payload }, { call, put }) {
      yield put({
        type: 'changeStatus',
        payload: {
          submitLoading: true,
        }
      });
      const response = yield call(addAddress, payload);
      yield put({
        type: 'changeStatus',
        payload: {
          submitLoading: false,
        }
      });
    },
    *updateAddress({ payload }, { call, put }) {
      yield put({
        type: 'changeStatus',
        payload: {
          submitLoading: true,
        }
      });
      const response = yield call(updateAddress, payload);
      yield put({
        type: 'changeStatus',
        payload: {
          submitLoading: false,
        }
      });
    },
    *setDefault({ payload }, { call, put }) {
      yield put({
        type: 'changeStatus',
        payload: {
          submitLoading: true,
        }
      });
      const response = yield call(setDefault, payload);
      yield put({
        type: 'changeStatus',
        payload: {
          submitLoading: false,
        }
      });
    },
    *removeAddress({ payload }, { call, put }) {
      yield put({
        type: 'changeStatus',
        payload: {
          submitLoading: true,
        }
      });
      const response = yield call(removeAddress, payload);
      yield put({
        type: 'changeStatus',
        payload: {
          submitLoading: false,
        }
      });
    },
  },

  reducers: {
    changeAddressList(state, { payload }) {
      return {
        ...state,
        addressList: payload
      }
    },
    changeStatus(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
};
