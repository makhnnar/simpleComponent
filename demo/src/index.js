import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

const code = 'var line = \'my line\'';

export default class Demo extends Component {
  render() {
    return <div>
      <h1>my-component Demo</h1>
      <Example
        codeToShow={code}
        langSintax={"jsx"}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
