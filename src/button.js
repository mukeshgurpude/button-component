import React, { Component } from 'react';

const variants = {
  simple: {
    '--bg': 'rgba(41, 98, 255, 1)',
    '--clr': '#fff',
    '--outline': '',
    '--bg-over': 'rgba(0, 57, 203, 1)',
    '--clr-over': '#fff'
  },
  default: {
    '--bg': 'rgba(224, 224, 224, 1)',
    '--clr': '#000',
    '--outline': '',
    '--bg-over': 'rgba(174, 174, 174, 1)'
  },
  outline: {
    '--bg': 'rgba(255, 255, 255, 1)',
    '--clr': 'rgba(61, 90, 254, 1)',
    '--outline': '1px solid rgba(61, 90, 254, 1)',
    '--bg-over': 'rgba(41, 98, 255, 0.1)'
  },
  text: {
    '--bg': 'transparent',
    '--clr': 'rgba(61, 90, 254, 1)',
    '--outline': 'none',
    '--bg-over': 'rgba(41, 98, 255, 0.1)'
  },
}

const sizes = {
  sm: {'--scale': 'scale(.6)'},
  md: {'--scale': 'scale(1)'},
  lg: {'--scale': 'scale(1.4)'},
}

export default class button extends Component {
  constructor(props){
    super(props);
    this.props = props;
    this.variant = this.props.style.variant || 'simple';
    this.size = this.props.style.size || 'md';
  }
  render() {
    return (
      <section className="wrapper">
        <h3>{this.props.title}</h3>
        <div style={{...variants[this.variant], ...sizes[this.size], }} className="btn">
          {this.props.displayName}
        </div>
      </section>
    )
  }
}

