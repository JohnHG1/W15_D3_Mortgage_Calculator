import React from 'react'


const ResultsDisplay = (props) => {
  if (!props.maxValue) return null;
  return (
    <div className="results-display">
      <h1>Max Value: £{props.maxValue}</h1>
      <h2>Loan to Value: {props.loanToValue}%</h2>
    </div>
  )
}

export default ResultsDisplay
