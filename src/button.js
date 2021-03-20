import React, { Component } from 'react';
import {variants, sizes, disabled, colors} from './utils';

export default class button extends Component {
  constructor(props){
    super(props);
    this.props = props;
    this.variant = this.props.style.variant || 'simple';
    this.size = this.props.style.size || 'md';
  }
  render() {
    // disabled property, for easy reference
    const d = this.props.style.disabled;
    
    // If, text variant is applied, then overwrite disabled styles
    const handleDisabled = d?(this.variant==='text'?{...disabled, ...variants['text']}:disabled):{};
    const color = this.props.style.color?colors[this.props.style.color]:{}
    
    return (
      <section className="wrapper" style={{width: `calc(${this.props.width*100}% - 1em)`}}>
        <h3>{this.props.title}</h3>
        <div style={{...variants[this.variant], ...sizes[this.size], ...color, ...handleDisabled } } className={this.props.style.disableShadow?'btn no-shadow':'btn'}
        onClick={_=>this.props.showFull && this.props.showFull(this.props)} >
          {this.props.style.startIcon?<span className="material-icons">{this.props.style.startIcon}</span>:''}
          {this.props.displayName}
          {this.props.style.endIcon?<span className="material-icons">{this.props.style.endIcon}</span>:''}
        </div>
      </section>
    )
  }
}

