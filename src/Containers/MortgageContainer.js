import React, { Component } from 'react'
import Header from '../Components/Header'
import InputForm from '../Components/InputForm'
import ResultsDisplay from '../Components/ResultsDisplay'



class MortgageContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userSalary: 0,
      partnerSalary: 0,
      deposit: 0,
      maxValue: 0,
      title: "Mortgage Calculator"
    }
  }
  
  render() {
    return (
      <div>
        < Header />
        < InputForm />
        < ResultsDisplay />
      </div>     
    )
  }
}

export default MortgageContainer
