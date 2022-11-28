import React, { Component } from 'react'

export class MobileManufacturers extends Component {
  render() {
    const mobile=['samsung','htp','Micromax','Apple'];
    const mobilelist=mobile.map((item)=><li>{item}</li> );
    return (
      <div>{mobilelist}</div>
    )
  }
}

export default MobileManufacturers