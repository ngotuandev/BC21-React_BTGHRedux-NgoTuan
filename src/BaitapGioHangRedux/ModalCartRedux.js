import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DELETE_PRODUCT_MODAL,
  INCREASE_DECREASE,
} from "../redux/constants/typeEventCartRedux";
import { increase, decrease } from "../redux/constants/numberModal";

class ModalCartRedux extends Component {
  renderModalCart = () => {
    return this.props.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img
              src={item.hinhAnh}
              style={{ width: "75px", height: "75px" }}
              alt=""
            />
          </td>
          <td>
            <button
              className="btn btn-success mr-1"
              onClick={() => {
                this.props.increaseDecrease(item.maSP, increase);
              }}
            >
              +
            </button>
            {item.amount}
            <button
              className="btn btn-danger ml-1"
              onClick={() => {
                this.props.increaseDecrease(item.maSP, decrease);
              }}
            >
              -
            </button>
          </td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>{(item.amount * item.giaBan).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteProductModal(item.maSP);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  sumNumberCart = () => {
    return this.props.data.reduce((sumNumber, data, index) => {
      return (sumNumber += data.amount);
    }, 0);
  };

  sumCurrency = () => {
    return this.props.data.reduce((sumCurrency, data, index) => {
      return (sumCurrency += data.amount * data.giaBan);
    }, 0);
  };

  render() {
    return (
      <div>
        <h4
          className="text-right"
          style={{ cursor: "pointer" }}
          data-toggle="modal"
          data-target="#modelId"
        >
          Giỏ hàng({this.sumNumberCart()})
        </h4>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: "60vw" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Tên SP</th>
                      <th>Hình Ảnh</th>
                      <th>Số Lượng</th>
                      <th>Giá Bán</th>
                      <th>Thành Tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderModalCart()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4}></td>
                      <th>Tổng tiền:</th>
                      <td>{this.sumCurrency().toLocaleString()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.Product.dataCart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    increaseDecrease: (maSP, number) => {
      dispatch({
        type: INCREASE_DECREASE,
        payload: maSP,
        number,
      });
    },
    deleteProductModal: (maSP) => {
      dispatch({
        type: DELETE_PRODUCT_MODAL,
        payload: maSP,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCartRedux);
