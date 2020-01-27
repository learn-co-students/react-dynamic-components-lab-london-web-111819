import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: 2}}>
        {/* your conditional code here! */}
        <ColorBox opacity={this.props.value}/>

      </div>
    )
  }

}

// ===============================
<ColorBox opacity={1} />
// =====
import React, { Component } from 'react';
 
export default class Example extends Component {
  render() {
    const newValue = this.props.value * 2;
    return this.props.value > 100 ? null : ( <div>
        <Example value={newValue} />
      </div>)
  }
}