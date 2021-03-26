import './button.css';
import Button from './button'
import React from 'react';
import {buttons} from './utils';
import Custom from './custom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component{  
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      full: {},
      isClicked: false,
      home: window.location.pathname==='/',
    };
    this.showFullScreen = this.showFullScreen.bind(this);
    this.change = this.change.bind(this);
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
  change(e){
    this.setState(s=>({...s, home: e.target.getAttribute('href')==='/', isClicked: false}))
  }
  render(){
    return <>
    <Router>
      <header>
        <h1>Buttons</h1>
        {this.state.home?<Link to="/custom" onClick={this.change}> Create a custom button </Link>:<Link to="/" onClick={this.change}>Home</Link>}
      </header>
        <Switch>
          <Route path="/custom" component={Custom} />
          <Route path="/">
            {document.body.classList.remove('custom')}
            <main id="buttons">
            {
              buttons.map((b, i)=>{
                return <Button {...b.props} displayName={b.name} title={b.title} key={i} width={b.width} onClick={this.showFullScreen} />
              })
            }
            </main>
            {this.state.isClicked?
              <aside id="fullNav">
                <span id="close" className="material-icons" title="ESC" onClick={_=>{this.setState(s=>({...s, isClicked: false}))}}>close</span>
                <Button {...this.state.full} displayName={this.state.full.displayName || 'Default'} title={this.state.full.title} />
                <Link to="/custom" onClick={this.change}> Create a custom button </Link>
              </aside>
              :
              ''
            }
          </Route>
        </Switch>
        <footer>
          <p>Created by <a href="https://devchallenges.io/portfolio/mukeshgurpude">mukeshgurpude-devChallenges.io</a></p>
        </footer>
      </Router>
    </>
  }
}

export default App;
