import React, { Component } from 'react'

class InputForm extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
          userSalary: 0,
          partnerSalary: 0,
          deposit: 0
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit(event){
        event.preventDefault();
        const userSalary = parseInt(this.state.userSalary);
        const partnerSalary = parseInt(this.state.partnerSalary);
        const deposit = parseInt(this.state.deposit);

        if(!userSalary || !partnerSalary || !deposit) return <p>Please input details</p>;
        this.props.onInputSubmit({
          userSalary: userSalary,
          partnerSalary: partnerSalary,
          deposit: deposit
        })
        this.setState({
          userSalary: 0,
          partnerSalary: 0,
          deposit: 0
        })
    }


    render() {
    return (
      <>
      <form onSubmit={this.handleSubmit} className="input-form-one">
        <div className="inputs">
          <div className="input-userSalary">
              <label>User Salary:
               <input type="number" name="userSalary" id="userSalary" min="0" onChange={this.handleInputChange}/>
              </label>
          </div>

          <div className="input-partnerSalary">
              <label>Partner Salary:
               <input type="number" name="partnerSalary" id="partnerSalary" min="0" onChange={this.handleInputChange}/>
              </label>
          </div>

          <div className="input-deposit">
              <label>Deposit:
              <input type="number" name="deposit" min="0" id="deposit" onChange={this.handleInputChange}/>
              </label>
          </div>
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
