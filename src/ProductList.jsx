import React from "react";

export default class ProductList extends React.Component {
  state = {
    products: [],
    cartItems: [],
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => this.setState({ products }));
  }

  componentDidUpdate() {
    console.log(this.state.products);
  }

  handleAddCart = (product) => {
    this.setState({
      cartItems: [...this.state.cartItems, product],
    });
    this.props.updateData(product);
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.products.map((el) => (
            <li key={el.id}>
              <h2>{el.title}</h2>
              <h5>{el.price}</h5>
              <button onClick={() => this.handleAddCart(el)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
