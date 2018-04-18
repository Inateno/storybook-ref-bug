/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  constructor(props) {
    super(props);
    
    this.myRef = React.createRef();
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test} ref="toto">
        Ref is failing when you do npm i in packages/ref_string
      </div>
    )
  }
}
