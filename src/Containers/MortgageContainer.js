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
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.calculateMaxValue = this.calculateMaxValue.bind(this);
  }

  handleInputSubmit(inputData){
    this.setState({
      userSalary: inputData.userSalary,
      partnerSalary: inputData.partnerSalary,
      deposit: inputData.deposit,
      maxValue: (((inputData.userSalary + inputData.partnerSalary) * 3) + inputData.deposit)
    })

  }

  calculateMaxValue(){
    console.log("CalculateMaxValue called")
    const maxValue = ((this.state.userSalary + this.state.partnerSalary) * 3) + this.state.deposit
    console.log("maxValue", maxValue);
    
    this.setState({maxValue: maxValue})
  }

  
  render() {
    return (
      <div>
        < Header title={this.state.title}/>
        < InputForm onInputSubmit={this.handleInputSubmit}/>
        < ResultsDisplay maxValue={this.state.maxValue}/>
      </div>     
    )
  }
}

export default MortgageContainer
