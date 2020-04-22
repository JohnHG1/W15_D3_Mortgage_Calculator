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
      loanToValue: 0,
      title: "Mortgage Calculator"
    }
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.calculateMaxValue = this.calculateMaxValue.bind(this);
    this.calculateLoanToValue = this.calculateLoanToValue.bind(this);
  }

  handleInputSubmit(inputData){
    this.setState({
      userSalary: inputData.userSalary,
      partnerSalary: inputData.partnerSalary,
      deposit: inputData.deposit,
      maxValue: this.calculateMaxValue(inputData),
      loanToValue: this.calculateLoanToValue(inputData.deposit, this.calculateMaxValue(inputData))
    })
  }

  calculateMaxValue(iD){
    return ((iD.userSalary + iD.partnerSalary) * 3) + iD.deposit
  }

  calculateLoanToValue(deposit,value){
    return parseInt(100-((deposit/value)*100));
  }

  
  render() {
    return (
      <div>
        < Header title={this.state.title}/>
        < InputForm onInputSubmit={this.handleInputSubmit}/>
        < ResultsDisplay maxValue={this.state.maxValue} loanToValue={this.state.loanToValue}/>
      </div>     
    )
  }
}

export default MortgageContainer
