import data from '../assets/patients.json'

export const GET_PATIENTS = 'get patients'

// use a thunk as you should in a real fetch request
export const getPatients = () => dispatch => dispatch({
  type: GET_PATIENTS,
  data,
})
