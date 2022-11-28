import React, { Component } from 'react'

export class MobileOs extends Component {
  render() {
    const mobileOs=['Android','Balckberry','iphone','windows phone'];
    const mobilelist=mobileOs.map((item)=> <li>{item}</li>);
    return (
      <div>{mobilelist}</div>
    )
  }
}

export default MobileOs