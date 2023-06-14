import React from "react";

export default class Cart extends React.Component {
  state = {
    count: 1,
  };

  handlemeno = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handlepiu = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Cart</h2>
        <ul>
          {this.props.dataFromList.map((item, index) => (
            <li key={index}>
              {item.title} - Quantity: {this.state.count}
              <button onClick={() => this.handlepiu(item.id)}>+1</button>
              <button onClick={() => this.handlemeno(item.id)}>-1</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
