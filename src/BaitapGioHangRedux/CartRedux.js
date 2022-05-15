import React, { Component } from "react";
import ListProductRedux from "./ListProductRedux";
import ModalCartRedux from "./ModalCartRedux";
import ProductDetail from "./ProductDetail";

export default class CartRedux extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="mb-3">Bài tập giỏ hàng Redux</h1>
        <ModalCartRedux />
        <ListProductRedux />
        <ProductDetail />
      </div>
    );
  }
}
