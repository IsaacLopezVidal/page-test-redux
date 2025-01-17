import actionTypes from './series.actions'
const initialState = {
    items: [],
    isLoading: false,
    hasError: false,
    meCaenGordos: false,
    valueToOperate:''
  }

  const reducer = (state = initialState, action) => {
    switch(action.type){
      case actionTypes.LOAD:
        return {
          ...state,
          isLoading: true,
          hasError: false
        }
      case actionTypes.LOAD_SUCCESS:
        return {...state,
        items: action.payload,
        isLoading: false
        }
      case actionTypes.LOAD_FAILURE:
        return {
          ...state,
          isLoading: false,
          hasError: true
        }
      case actionTypes.LOAD_SEARCH:
            return {...state,
                items: action.payload,
                isLoading: false
                }
      default:
        return state
    }
  }
  
  export default reducer