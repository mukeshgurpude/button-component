import './App.css';
import Button from './button'
// import {useState} from 'react';
import React from 'react';

const buttons = [
  { title: '<Button />', props: {variant: 'default'}, name: 'Button', },
  { title: '<Button variant="outline" />', props: {variant: 'outline'}, name: 'Outlined Button', },
  { title: '<Button variant="text" />', props: {variant: 'text'}, name: 'Text Button', },
  { title: '<Button disableShadow />', props: {disableShadow: true}, name: 'No Shadow', },
  { title: '<Button disabled />', props: {disabled: true}, name: 'Disabled', },
  { title: '<Button size="sm" />', props: {size: 'sm'}, name: 'Small size', },
  { title: '<Button size="md" />', props: {size: 'md'}, name: 'Normal Size', },
  { title: '<Button size="lg" />', props: {size: 'lg'}, name: 'Large size', },
]

class App extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  render(){
    return <>
    <h2>Buttons</h2>
    <main>
    {
      buttons.map((b, i)=>{
        return <Button style={b.props} displayName={b.name || 'Default'} title={b.title} key={i}/>
      })
    }
    </main>
    </>
  }
}

export default App;
