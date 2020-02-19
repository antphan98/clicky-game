import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./images.json";
import Header from "./components/Header";

class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0
  };

  render() {
    return (
      <Wrapper>
<Header score={this.state.score} highscore={this.state.highscore}>Bare Bears Clicky Game</Header>       
 {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            image={card.image}
          />

        ))};
        
      </Wrapper>
    );

    }
  }



export default App;
