import React, { Component } from 'react'

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
      <>
        <h1>Hello World</h1>
      </>
    )
  }
}

export default MortgageContainer
