import React from 'react';
import {
Card,
Wrapper,
Header
} from './components';
import cards from "./images.json";

const App = () => {
  return (
    <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
  );
}

export default App;
