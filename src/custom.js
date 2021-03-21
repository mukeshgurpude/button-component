import React from 'react';
import Button from './button';
import './custom.css';

export default class Custom extends React.Component{
  constructor(){
    super();
    this.state = JSON.parse(localStorage.getItem('customButtonConf')) || {};
    this.dropdownSelect = this.dropdownSelect.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  dropdownSelect(e){
    this.setState(s=>({
      ...s,
      [e.target.name]: e.target.value
    })
    )
  }

  toggle(e){
    const val = e.target.type==='radio'?e.target.value:e.target.checked;
    this.setState(s=>({
      ...s,
      [e.target.name]: val,
    }))
  }

  componentWillUnmount(){
    localStorage.setItem('customButtonConf', JSON.stringify(this.state));
  }

  render(){
    return <main>
      <form id="controls" onSubmit={function(e){e.preventDefault()}}>
        <fieldset>
          <legend>Options</legend>
        {/* Dropdown for variant */}
        <label>Variant: 
        <select name="variant" onChange={this.dropdownSelect} value={this.state.variant} >
          <option value="">None</option>
          <option value="default">Default</option>
          <option value="text">Text</option>
          <option value="outline">Outline</option>
        </select>
        </label>

        {/* Dropdown for colors */}
        <label>Color: 
        <select name="color" onChange={this.dropdownSelect} value={this.state.color} >
          <option value="">None</option>
          <option value="default">Default</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="danger">Danger</option>
        </select>
        </label>
        </fieldset>

        <fieldset>
          <legend>Basic</legend>
        <label><input type="checkbox" name="disabled" onChange={this.toggle} checked={this.state.disabled || false}/>Disabled</label>
        <label><input type="checkbox" name="disableShadow" onChange={this.toggle} checked={this.state.disableShadow || false}/>No Shadow</label>
        </fieldset>

        <fieldset>
          <legend>Size </legend>
          <label><input type="radio" name="size" value="sm" onChange={this.toggle} checked={this.state.size === 'sm'}/>Small</label>
          <label><input type="radio" name="size" value="md" onChange={this.toggle} checked={this.state.size === 'md'}/>Normal</label>
          <label><input type="radio" name="size" value="lg" onChange={this.toggle} checked={this.state.size === 'lg'}/>Large</label>
        </fieldset>

      </form>
      <Button {...this.state} />
    </main>
  }
}
