import React from "react";
import Button from "./Button";
import ThemeToggler from './ThemeToggler'
const Card = (props) => {
  return (
    <div className="card">
      <img src="https://picsum.photos/200" />
      <h2>The Card</h2>
      <p>sadfasdg asd g sadg sadg sdagsad g sadg sda gsa dg sdag</p>
      <Button theme={props.theme} />
      <ThemeToggler onToggle={props.onToggle}/>
    </div>
  );
};

export default Card;
