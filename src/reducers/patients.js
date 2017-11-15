import { GET_PATIENTS } from '../actions/get'

import { calculateAge } from '../utils/datetime'

const defaultState = {
  dict: null,
  keys: null,
}

const savePatients = (state, { data }) =>
  ({
    ...state,
    keys: data.map(p => p.mrn),
    dict: data
      .map( p => ({ ...p, age: calculateAge(p.dob)}) ) // calculate age
      .reduce( (dict, p) => ({ ...dict, [p.mrn]: p }), {} ), // normalize
  })

const patients = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PATIENTS:
      return savePatients(state, action)
    default:
      return state
  }
}

export default patients
