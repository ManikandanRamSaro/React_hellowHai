import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Garage from './Grage';
import Car from './Car';
class First extends React.Component {
  render() {
  return <div><h2>Hi {this.props.name}!, Welcome to this application.. {this.props.fun}</h2><br/> <App/><hr/><Garage/><hr/><Car/></div>;
  }
}
export default First;