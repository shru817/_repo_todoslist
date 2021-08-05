import React from "react";
//import ReactDom from 'react-dom';
import logo from "./logo.svg";
import "./App.css";
import List from "./List";

class App extends React.Component {
  render() {
    return (
      <div>
        <List todoArr={arr}></List>
      </div>
    );
  }
}

var arr = [
  {
    id: 0,
    title: "Study",
    active:true
  },
  {
    id: 1,
    title: "chores",
    active:false
  },
  {
    id: 2,
    title: "cook",
    active:true
  },
];

export default App;
