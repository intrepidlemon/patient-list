import { combineReducers } from 'redux'

import patients from './patients'
import stats from './stats'

const reducer = combineReducers({
  patients,
  stats,
})

export default reducer
