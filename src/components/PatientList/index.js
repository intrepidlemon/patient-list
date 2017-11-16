import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './patient-list.css'

const PatientList = ({ keys, dict }) => {

  // placeholders
  if (keys === null) {
    return <div className="patient-list">
      { Array(6).fill().map( (_, i) =>
        <div key={i} className="patient-list__placeholder"/>
      )}
    </div>
  }

  if (keys.length === 0) {
    return <div className="patient-list patient-list--empty">
      No patients
    </div>
  }

  return <div className="patient-list">
    <Table keys={keys} dict={dict} />
  </div>
}

const Table = ({ keys, dict }) =>
  <table className="patient-list__table">
    <thead>
      <tr className="patient-list__head">
        <th>Name</th>
        <th>MRN</th>
        <th>DOB</th>
        <th>Demographics</th>
        <th>Treatment site</th>
      </tr>
    </thead>
    <tbody>
      { keys.map( k =>
        <Row key={k} {...dict[k]} />
      )}
    </tbody>
  </table>

const Row = withRouter(({
  history,
  location,
  mrn,
  name,
  dob,
  sex,
  age,
  treatment_site: site,
}) => {
  const route = `/patient/${mrn}`
  const selected = location.pathname === route
  return <tr
    onClick={() => history.push(route)}
    className={`patient-list__row ${selected ? "patient-list__row--selected" : ""}`}
  >
    <td>{ name.first } { name.last }</td>
    <td>{ mrn }</td>
    <td>{ dob }</td>
    <td>{ age } yr old { sex }</td>
    <td>{ site }</td>
  </tr>
})

const mapStateToProps = ({ patients }, props) => ({
  keys: patients.keys,
  dict: patients.dict,
  ...props,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PatientList)
