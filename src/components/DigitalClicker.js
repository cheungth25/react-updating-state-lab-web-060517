// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      timesClicked: 0
    }
  }

  clickMe = () => {
    this.setState({
      timesClicked: this.state.timesClicked+1
    })
  }

  render(){
    return(
      <button onClick={this.clickMe}>{this.state.timesClicked}</button>
    )
  }
}
