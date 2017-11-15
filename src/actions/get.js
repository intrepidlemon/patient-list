import fetch from 'isomorphic-fetch'

export const GET_PATIENTS = 'get patients'

const patientsUrl = "https://raw.githubusercontent.com/thearrow/react-challenge/master/patients.json"

export const getPatients = () => dispatch => {
  fetch(patientsUrl).then(r => r.json()).then(data => {
    dispatch({
      type: GET_PATIENTS,
      data,
    })
  })
}
