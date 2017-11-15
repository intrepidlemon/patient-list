import moment from 'moment'

// calculates current age in years from dob (MM/DD/YYYY)
export const calculateAge = dob =>
  moment().diff(moment(dob, "MM/DD/YYYY"), 'years')
