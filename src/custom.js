import React from 'react';
import Button from './button';
import './custom.css';

// export default function Custom() {

//   return (
//     <main>
//       <Button endIcon="code" displayName="Custom Component" startIcon="code" />
//     </main>
//   )
// }

export default class Custom extends React.Component{
  constructor(){
    super();
    this.state = {
      disableShadow: true,
    };
  }
  render(){
    return <>
      <form id="controls"></form>
      <Button {...this.state} />
    </>
  }
}
