import React, {Component} from 'react';

import './App.css';

import Search from './components/Search';
import Header from './components/Header';
import Recipes from './components/Recipes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
library.add(faStroopwafel)

//import Footer from './components/Footer';



const API_KEY = "a24662c82419daac7afceb02365d421f";


//const YOUR_APP_ID = "9a72d5e8";
//const YOUR_APP_KEY = "7fb70ef66279b578d2a88a1fd650e7e6";
//https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
//https://api.edamam.com/search?q=chicken&app_id=9a72d5e8&app_key=7fb70ef66279b578d2a88a1fd650e7e6&from=0&to=3&calories=591-722&health=alcohol-free


class App extends Component {

  state = {
    recipes: []
  }


  getRecipe = async(e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}";
`);



      const data = await api_call.json();
      this.setState({recipes: data.recipes});
      console.log(this.state.recipes);
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Search getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}
export default App;
