import React from 'react'
import { connect } from 'react-redux'

import RangePlot from '../RangePlot'

const Patient = ({ dict, mrn }) => {
  if (dict === null) {
    return <div className="patient patient--loading"/>
  }

  const patient = dict[mrn]

  if (patient === null) {
    return <div className="patient patient--missing">
      Patient not found
    </div>
  }

  return <PatientView {...patient}/>
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
}) => <div className="patient">
  MRN: { mrn }
  { dob }
  { age } yr old { sex }
  { size } cm { histology }
  { weight } lb
  <div>
    <RangePlot point={weight} units="lbs" />
  </div>
</div>

const mapStateToProps = ({ patients }, props) => ({
  mrn: props.match.params.mrn,
  dict: patients.dict,
  ...props,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Patient)
