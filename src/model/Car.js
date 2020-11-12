import React from 'react';
class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Manikandan",
        mailid: "mani95ram@outlook.com",
        mobile: "8608024623",
        dob: '21-12-1995',
        display:''
      };
    }
    getTextboxValue=()=>{
        
        let data=document.getElementById('txtname').value;
        console.log(data);
        this.setState({display:data});
      }
      weldone=()=>{
        alert('Welcome from React function');
      }
    render() {
      return (
        <div>
          <h1>I am {this.state.name}</h1>
          <p>
            my mail id {this.state.mailid} <br/>
            contact No {this.state.mobile}<br/>
            date of birth {this.state.dob}.
          </p>
      <center>{this.state.display}</center>
          <input type="text" onKeyUp={this.getTextboxValue} id="txtname"/>
          <button onClick={this.weldone}>Click me</button>
        </div>
      );
    }
  }
  export default Car;