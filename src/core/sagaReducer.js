import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import SeriesActions from './modules/Series/series.actions'
const Token="?token=9bdfc01df7854c59b65e042bf9b3bda10a3127902f7658ba22ef3994ef053edb";
const Series="SP74665,SF61745,SF60634,SF43773"
function* loadSeries(){
    try{
        const series = yield call(
            axios.get,
            `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${Series}/datos/oportuno${Token}`
          )
          yield put({type: SeriesActions.LOAD_SUCCESS, payload: series.data.bmx.series})
    }
    catch(e){

        yield put({type: SeriesActions.LOAD_FAILURE})
    }
}

function* loadSerie(seriesParam){
    try{
        console.log('seriesParam',seriesParam)
        const series = yield call(
            axios.get,
            `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${seriesParam.payload}/datos/oportuno${Token}`
          )
          yield put({type: SeriesActions.LOAD_SUCCESS, payload: series.data.bmx.series})
    }
    catch(e){
        yield put({type: SeriesActions.LOAD_FAILURE})
    }
}
function* rootSaga(){
    yield takeEvery(SeriesActions.LOAD, loadSeries)
    yield takeEvery(SeriesActions.LOAD_SEARCH,loadSerie)
  }
export default rootSaga