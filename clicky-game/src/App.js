import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./images.json";

class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0
  };

  render() {
    return (
      <Wrapper>

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
