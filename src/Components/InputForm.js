import React, { Component } from 'react'

class InputForm extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
          userSalary: 0,
          partnerSalary: 0,
          deposit: 0
      }
    }


    
  
    render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
          <div className="input-userSalary">
              <label for="usersalary">User Salary:     </label>
              <input type="number" name="usersalary" min="0" />
          </div>

          <div className="input-partnerSalary">
              <label for="partenrsalary">Partner Salary:     </label>
              <input type="number" name="partnersalary" min="0" />
          </div>

          <div className="input-deposit">
              <label for="deposit">Deposit:     </label>
              <input type="number" name="Deposit" min="0" />
          </div>

          <div className="button-wrapper">
              <input className="button" type="submit" value="calculate"/>
          </div>

      </form>
      </>
    )
  }
}

export default InputForm
