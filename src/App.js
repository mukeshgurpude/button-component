import './button.css';
import Button from './button'
import React from 'react';
import {buttons} from './utils';

class App extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      full: {},
      isClicked: false,
    };
    this.showFullScreen = this.showFullScreen.bind(this);
  }
  showFullScreen(props){
    this.setState(s=>({...s, full: props, isClicked: true}))
  }
  componentDidMount(){
    this.k = window.addEventListener('keydown', e=>{
      if(e.key === 'Escape' && this.state.isClicked){
        this.setState(s=>({...s, isClicked: false}))
      }
    })
  }
  componentWillUnmount(){
    this.k && window.removeEventListener('keydown', this.k)
  }
  render(){
    return <>
      <header>
        <h2>Buttons</h2>
      </header>
      <main id="buttons">
      {
        buttons.map((b, i)=>{
          return <Button style={b.props} displayName={b.name || 'Default'} title={b.title} key={i} width={b.width} showFull={this.showFullScreen} />
        })
      }
      </main>
      {this.state.isClicked?
        <aside id="fullNav">
          <span id="close" className="material-icons" title="ESC" onClick={_=>{this.setState(s=>({...s, isClicked: false}))}}>close</span>
          <Button style={this.state.full.style} displayName={this.state.full.displayName || 'Default'} title={this.state.full.title} />
        </aside>
        :
        ''
      }
    </>
  }
}

export default App;
