import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_CART, SHOW_DETAIL } from "../redux/constants/typeEventCartRedux";

class ProductItem extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.data;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={hinhAnh} height={300} alt="" />
        <div className="card-body">
          <h4 className="card-title text-center">{tenSP}</h4>
          <p className="card-text text-center">{giaBan.toLocaleString()}</p>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-success mr-3"
              onClick={() => {
                this.props.showDetail(this.props.data);
              }}
            >
              Detail
            </button>
            <button
              className="btn btn-primary ml-3"
              onClick={() => {
                this.props.addCart(this.props.data);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addCart: (data) => {
      dispatch({
        type: ADD_CART,
        payload: data,
      });
    },
    showDetail: (data) => {
      dispatch({
        type: SHOW_DETAIL,
        payload: data,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
