import './button.css';
import Button from './button'
import React from 'react';
import {buttons} from './utils';

class App extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  render(){
    return <>
      <header>
        <h2>Buttons</h2>
      </header>
      <main id="buttons">
      {
        buttons.map((b, i)=>{
          return <Button style={b.props} displayName={b.name || 'Default'} title={b.title} key={i} width={b.width} />
        })
      }
      <Button style={{variant: 'text', startIcon: "account_circle", color: 'danger'}} displayName="Custom"/>
      </main>
    </>
  }
}

export default App;
