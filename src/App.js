import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/Search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      SearchField: ''
    };
  }

  handleChange = e => {
    this.setState({SearchField: e.target.value});
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const {monsters, SearchField} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(SearchField.toLowerCase()))
    return (
      <div className="App">
        <h1 className="title"> Monsters Rolodex </h1>
        <SearchBox 
          type='Search' 
          placeholder='Search monster' 
          handleChange = { this.handleChange }
        />
        <CardList monsters={filterMonsters}/>
      </div>
    );
  }
}

export default App;
