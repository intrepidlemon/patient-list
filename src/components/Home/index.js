import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import { getPatients } from '../../actions/get'
import PatientList from '../PatientList'
import Patient from '../Patient'

import './home.css'

class Home extends Component {
  componentDidMount() {
    const { load } = this.props
    load()
  }

  render()  {
    return <div className="main">
      <Route component={PatientList} />
      <Route path="/patient/:mrn" component={Patient} />
    </div>
  }
}

const mapStateToProps = (state, props) => ({
  ...props,
})

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(getPatients()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
