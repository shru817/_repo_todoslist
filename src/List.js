import React from "react";
//import ReactDom from 'react-dom';
import logo from "./logo.svg";
import "./List.css";

class List extends React.Component {
  constructor(props) {
    super(props);

    //

    this.state = {
      items: this.props.todoArr
    };

    this.myRef = React.createRef();
    this.addHandler = this.addHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }
  
  addHandler() {
    let val = this.myRef.current.value;
    if(val!=""){
      let newItems = this.state.items.concat({
          id: this.state.items.length,
          title : val,
          active: true
      })  
    this.setState({ items: newItems });
    }
  }

    deleteHandler(e) {
        let arrIndex = e.target.getAttribute("data-id");
        let newItems  = this.state.items.slice(0);
        newItems[arrIndex].active = false;
        this.setState({ items: newItems });
   }

  render() {        
    return (
      <div>
        <ul onClick={this.deleteHandler}>
          {this.state.items.map((todo) => {
            return <li key={todo.id} data-id={todo.id} className={todo.active?'':'delete'} >{todo.title} </li>;
          })}
        </ul>
        <input ref={this.myRef} type="text" placeholder="Enter Todo Items" />
        <button type="button" onClick={this.addHandler}>
          Add
        </button>

         
      </div>
    );
  }
}

export default List;
