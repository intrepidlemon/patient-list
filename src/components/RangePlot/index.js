import React from 'react'
import { connect } from 'react-redux'

const RangePlot = ({ max, min, median, units, point }) => {
  if (max === null) {
    return <div className="range-plot range-plot--loading"/>
  }

  return <Plot max={max} min={min} median={median} units={units} point={point} />
}

const xPos = (max, min, val) => (500*(val-min)/(max-min))

const Plot = ({ max, min, median, units, point }) =>
  <svg className="range-plot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">
    <path d="M0 0 V 20" stroke="black"/>
    <path d="M0 10 H 500" stroke="black"/>
    <path d="M500 0 V 20" stroke="black"/>

    <text x={0} y={30} className="range-plot__label">
      { min } { units }
    </text>

    <text x={xPos(max, min, median)} y={30} className="range-plot__label" textAnchor="middle">
      { median } { units }
    </text>

    <text x={500} y={30} className="range-plot__label" textAnchor="end">
      { max } { units }
    </text>

    <circle cx={xPos(max, min, point)} cy={10} r={5} fill="red" />
    <path d={`M${xPos(max, min, median)} 5 V 15`} stroke="black"/>
  </svg>

const mapStateToProps = ({ stats }, props) => ({
  ...stats,
  ...props,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(RangePlot)
