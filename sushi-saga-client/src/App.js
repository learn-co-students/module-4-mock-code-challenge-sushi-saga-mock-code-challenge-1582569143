import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {sushi: [], startIndex: 0, eaten: [], funds: 100}

  advanceStartIndex = () => this.setState({startIndex: this.state.startIndex + 4})


  // 100 % 100 = 0

  eatSushi = id => () => {

    const foundSushi = this.state.sushi.find( s => s.id === id)

    if (this.state.funds >= foundSushi.price) {

      const eaten = [...this.state.eaten, id]

      const funds = this.state.funds - foundSushi.price

      this.setState({ eaten, funds })
      
    }
  }

  componentDidMount(){

    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({sushi: data}))

  }

  

  render() {
    console.log("app state", this.state)

    return (
      <div className="app">
        <SushiContainer
          renderedSushi={this.state.sushi.slice( this.state.startIndex, this.state.startIndex + 4 )}
          advanceStartIndex={this.advanceStartIndex}
          eatSushi={this.eatSushi}
          eaten={this.state.eaten}
        />
        <Table eaten={this.state.eaten} funds={this.state.funds}/>
      </div>
    );
  }
}

export default App;