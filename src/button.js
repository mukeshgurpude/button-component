import React, { Component } from 'react';
import {variants, sizes, disabled, colors} from './utils';

export default class button extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render() {
    // disabled property, for easy reference
    this.variant = this.props.variant || 'simple';
    this.size = this.props.size || 'md';
    const d = this.props.disabled;
    
    // If, text variant is applied, then overwrite disabled styles
    const handleDisabled = d?(this.variant==='text'?{...disabled, ...variants['text']}:disabled):{};
    const color = this.props.color?colors[this.props.color]:{}
    
    return (
      <section className="wrapper" style={{width: `calc(${this.props.width*100}% - 1em)`}}>
        {this.props.title?<h2>{this.props.title}</h2>:''}
        <div style={{...variants[this.variant], ...sizes[this.size], ...color, ...handleDisabled } } className={this.props.disableShadow?'btn no-shadow':'btn'}
        onClick={ _=>{this.props.onClick && this.props.onClick(this.props.args || this.props)} } >
          {this.props.startIcon?<span className="material-icons">{this.props.startIcon}</span>:''}
          {this.props.displayName || 'Default'}
          {this.props.endIcon?<span className="material-icons">{this.props.endIcon}</span>:''}
        </div>
      </section>
    )
  }
}

