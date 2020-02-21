import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
      <div className="title">
          {props.children}
      </div>
      <div className="score">
          Score: {props.score}
          High Score: {props.highscore}
      </div>
  </div>

//   <nav className="navbar navbar-light bg-light">
//     <a class="navbar-brand title">{props.children}</a>
//     <div className="scores">
//       Score: {props.score}
//       High Score: {props.highscore}
//     </div>
//   </nav>;
);

export default Header;
