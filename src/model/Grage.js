import React from 'react';
class Car extends React.Component {
    render() {
      return <h2>I am a {this.props.brand.name+' '+this.props.brand.model}!</h2>;
    }
  }
  
  class Garage extends React.Component {
    render() {
      const carinfo = {name: "TATA ", model: "Sumo"};
      return (
        <div>
        <h1>Who lives in my garage?</h1>
        <Car brand={carinfo} />
        </div>
      );
    }
  }
  export default Garage;