import React from "react";
import ProductList from "./ProductList";
import Cart from "./cart";
export default class App extends React.Component {
  state = {
    dataFromList: [],
  };

  handleRicevi = (newData) => {
    this.setState({
      dataFromList: [...this.state.dataFromList, newData],
    });
  };

  render() {
    return (
      <div>
        <Cart dataFromList={this.state.dataFromList} />
        <ProductList updateData={this.handleRicevi} />
      </div>
    );
  }
}
