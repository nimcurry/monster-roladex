//import logo from './logo.svg';
import './App.css';
import {CardsList} from './components/cards-list/cards-list.component';
import SearchBox from './components/search-box/search-box.component';

import React,{ Component } from 'react';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Edit <code>src/App.js</code> and save to reload. 
          //hello i m nimish
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [],
      searchFiled: '',
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>this.setState({monsters:user}));
  }

  handleChange = (e) => {
    this.setState({searchFiled:e.target.value})
  }

  render(){
    //destructuring of object
    const {monsters,searchFiled} = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFiled.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Roaldex</h1>
        <SearchBox placeholder='monsters search' handleChange={this.handleChange}/>
        {/* below monsters are props that we pass to cardslist which then map the monster names */}
        <CardsList monsters={filteredMonsters}/>
      </div>
    );
  }
}
export default App;
