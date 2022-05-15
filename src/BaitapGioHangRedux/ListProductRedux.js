import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

class ListProductRedux extends Component {
  renderListProduct = () => {
    return this.props.data.map((item) => {
      return (
        <div className="col-4" key={item.maSP}>
          <ProductItem data={item} />
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderListProduct()}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.Product.data,
  };
};

export default connect(mapStateToProps, null)(ListProductRedux);
