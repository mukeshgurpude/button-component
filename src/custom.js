import React from 'react';
import Button from './button';
import './custom.css';

export default class Custom extends React.Component{
  constructor(){
    super();
    this.state = JSON.parse(localStorage.getItem('customButtonConf')) || {};
    this.startIcon = this.state.startIcon || '';
    this.endIcon = this.state.endIcon || '';

    this.dropdownSelect = this.dropdownSelect.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleIcon = this.toggleIcon.bind(this);
    this.controlIconText = this.controlIconText.bind(this);
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
    }));
  }

  toggleIcon(e){
    const pos = e.target.name;
    if(!this[pos]){
      document.querySelector(`input[data-pos=${pos}]`).focus()
      return;
    }
    if(this.state[pos]) this.setState(s=>({...s, [pos]: ''}));
    else this.setState(s=>({...s, [pos]: this[pos]}));
  }

  controlIconText(e){
    const pos = e.target.dataset.pos;
    this[pos] = e.target.value;
    if(this.state[pos]){
      this.setState(s=>({...s, [pos]: this[pos]}))
    };
  }

  componentWillUnmount(){
    localStorage.setItem('customButtonConf', JSON.stringify(this.state));
  }

  componentDidMount(){
    document.querySelectorAll('input[data-pos').forEach(i=>{
      i.value = this[i.dataset.pos];
    })
  }

  render(){
    document.body.classList.add('custom');
    return <>
      <aside>
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

        <fieldset>
          <legend style={{display: 'flex', alignItems: 'center'}}>Icons&nbsp;<span style={{cursor: 'pointer'}} className="material-icons" title="Reference for icon codes, can be found at https://material.io/icons">info</span></legend>
          <div>
            <label>
              <input type="checkbox" name="startIcon" checked={this.state.startIcon || false} onChange={this.toggleIcon} />
              Start 
            </label>
            <label>
              Icon:
              <input data-pos="startIcon" type="text" onChange={this.controlIconText} placeholder="icon alias here, eg: store" />
            </label>
          </div>
          <div>
            <label>
            <input type="checkbox" name="endIcon" checked={this.state.endIcon || false} onChange={this.toggleIcon} />
              End  
            </label>
            <label>
              Icon:
              <input data-pos="endIcon" type="text" onChange={this.controlIconText} placeholder="icon alias here, eg: pin" />
            </label>
          </div>
        </fieldset>
      </form>
      </aside>
      <main>
        <Button {...this.state} />
      </main>
    </>
  }
}
