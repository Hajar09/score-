import React, { Component } from 'react';
import './App.css';
import PeopleList from './components/PeopleList';

class App extends Component {
  state = {
    inputValue : '',
    people : [
      {
        name:"Bob",
        score: 10
      },
      {
        name:"Pipo",
        score: 11
      }
    ]
  }


  changeScore = (operation, indexToChange) =>
  this.setState({
    people : this.state.people.map((people, i) =>{
      if(i === indexToChange){
        if(operation === 'incrementer'){
          return {
            ...people, score : this.state.people[i].score+1
          }
        }else {
          return {
            ...people, score : this.state.people[i].score-1
          }
        }
      }
      return people
    })
  })

  getTotalScore = () => {
    return this.state.people.reduce((accumulator,element)=>{
      return accumulator + element.score
    },0)
}

  setInputValue = (e)=>{ //(e) un evenement click//
    this.setState({
      inputValue: e.target.value
    })
  }

  newPeopleSubmit =(e)=>{
    if(this.state.inputValue !== "") {
      e.preventDefault();// pour ne pas déclange pas le formulaire quand tu submit
      this.setState({
        people : [{
          name: this.state.inputValue,
          score: 0
        },
        ...this.state.people // ... on reprend notre tab d'origine pour le remettre dans le nouv//
      ],
      inputValue : ''
      })
    }  
  }

  removePeople =(index)=>{
    this.setState({
      people:[
        ...this.state.people.slice(0,index),
        ...this.state.people.slice(index+1)
      ]

    })
  }

  render() {
    return (
      <div>
        <h1>Le Tableau</h1>
        <input type = 'text' onChange = {this.setInputValue} value={this.state.inputValue}/>
        <input type='submit' value='Ajouter' onClick={this.newPeopleSubmit}/>
        <PeopleList people ={this.state.people} changeScore={this.changeScore} removePeople={this.removePeople}/>
        <span>{this.getTotalScore()}</span>
      </div>
    );
  }
}

export default App;
