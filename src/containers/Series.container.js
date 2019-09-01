import {connect} from 'react-redux'
import SeriesView from '../views/Series.view'
import Actions from '../core/modules/Series/series.actions'

const mapStateToProps = state => ({
    series: state.Series.items,
    isLoading: state.Series.isLoading,
    hasError: state.Series.hasError,
    valueToOperate:state.Series.valueToOperate
  })
  
  const mapDispatchToProps = dispatch => ({
    loadSeries: () => dispatch({
      type:Actions.LOAD
    }),
    loadSerie:valor=>dispatch({
      type:Actions.LOAD_SEARCH,
      payload:valor
    })
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(SeriesView)