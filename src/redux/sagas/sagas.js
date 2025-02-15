
import { takeEvery, call, put } from 'redux-saga/effects';
import { SET_DATA } from '../actionTypes';
import { setData } from '../actions/actions';


const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  return response.json();
};


function* fetchDataSaga() {
  try {
    const data = yield call(fetchData);
    yield put(setData(data)); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


export default function* rootSaga() {
  yield takeEvery(SET_DATA, fetchDataSaga);
}
