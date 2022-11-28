import React, { Component } from 'react'

class App2 extends Component {
    
    render()
  
  {
    const num=()=>{
        return "hello World";
    };
    return (
    <div>
        <b>Hello World!</b>
        <p>{num()}<b>-----This hello is printed using arrow function</b></p>  
    </div>
    )
  }
}

export default App2