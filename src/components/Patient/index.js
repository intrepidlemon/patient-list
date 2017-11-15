import React from 'react'
import { connect } from 'react-redux'

import RangePlot from '../RangePlot'

import './patient.css'

const Patient = ({ dict, mrn, history }) => {
  if (dict === null) {
    return <div className="patient patient--loading"/>
  }

  const patient = dict[mrn]

  if (patient === null) {
    return <div className="patient patient--missing">
      Patient not found
    </div>
  }

  return <PatientView {...patient} close={() => history.push("/")} />
}

const PatientView = ({
  mrn,
  dob,
  sex,
  age,
  treatment_site: site,
  tumor_size_cm: size,
  histology,
  name,
  weight,
  close,
}) => <div className="patient">
  <div className="patient__row">
    <h1>{ name.first } { name.last }</h1>
    <button onClick={close}>✖</button>
  </div>
  <div className="patient__row">
    <div>MRN: { mrn }</div>
    <div>{ dob }</div>
    <div>{ age } yr old { sex }</div>
  </div>

  <div className="patient__row">{ size } cm { histology }</div>

  <div className="patient__row">
    <div>{ weight } lb</div>
    <div className="patient__weight-plot">
      <RangePlot point={weight} units="lb" />
    </div>
  </div>
</div>

const mapStateToProps = ({ patients }, props) => ({
  mrn: props.match.params.mrn,
  dict: patients.dict,
  ...props,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Patient)
