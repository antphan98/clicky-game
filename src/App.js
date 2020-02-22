import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./images.json";

class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0
  };

  cardClick = id => {
    this.state.cards.find((a, i) => {
      if (a.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({score: this.state.score + 1}, function() {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 1)
          return true;
        } else {
          cards.count = 0;
        }
      };

    });
  };

  render() {
    return (
      <Wrapper>
<Header score={this.state.score} highscore={this.state.highscore}>Bare Bears Clicky Game</Header>       
 {this.state.cards.map(card => (
          <Card
            id={card.id}
            image={card.image}
          />

        ))};
        
      </Wrapper>
    );

    }
  }



export default App;
