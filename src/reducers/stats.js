import { GET_PATIENTS } from '../actions/get'

const defaultState = {
  max: null,
  min: null,
  median: null,
}

const patientStats = (state, { data }) => {
  const weights = data.map(p => p.weight)
  const l = weights.length
  const m = l/2
  // if no weights, stick with null
  if (!weights) {
    return state
  }
  weights.sort()

  return {
    ...state,
    min: weights[0],
    max: weights[l - 1],
    median: (m % 1) ? (weights[m - 0.5]) : (weights[m - 1] + weights[m])/2,
  }
}

const patients = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PATIENTS:
      return patientStats(state, action)
    default:
      return state
  }
}

export default patients
