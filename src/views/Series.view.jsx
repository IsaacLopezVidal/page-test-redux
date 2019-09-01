import React from 'react'
import Serie from '../components/Series/SeriesItem'

class Series extends React.Component {
  componentDidMount(){
    if (this.props.series.length === 0){
      this.props.loadSeries()
    }
  }
  
  render() {
    return <div className="container">
        {this.props.series.map(serie => <Serie data={serie} ></Serie>)}
    </div>
  }
}
/*
{this.props.isLoading && <div>Cargando...</div>}
*/

export default Series