import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const PatientList = ({ keys, dict }) => {

  // placeholders
  if (keys === null) {
    return <div className="patient-list">
      { Array(10).map( _ =>
        <div className="patient-list patient-list__placeholder"/>
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
    <tbody>
      <tr>
        <th>Name</th>
        <th>MRN</th>
        <th>DOB</th>
        <th>Demographics</th>
        <th>Treatment site</th>
      </tr>
      { keys.map( k =>
        <Row key={k} {...dict[k]} />
      )}
    </tbody>
  </table>

const Row = withRouter(({
  history,
  match,
  mrn,
  name,
  dob,
  sex,
  age,
  treatment_site: site,
}) =>
  <tr
    onClick={() => history.push(`/patient/${mrn}`)}
    className="patient-list__row"
  >
    <td>{ name.first } { name.last }</td>
    <td>{ mrn }</td>
    <td>{ dob }</td>
    <td>{ age } yr old { sex }</td>
    <td>{ site }</td>
  </tr>
)

const mapStateToProps = ({ patients }, props) => ({
  keys: patients.keys,
  dict: patients.dict,
  ...props,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PatientList)
