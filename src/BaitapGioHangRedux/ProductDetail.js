import React, { Component } from "react";
import { connect } from "react-redux";

class ProductDetail extends Component {
  render() {
    let {
      hinhAnh,
      rom,
      ram,
      heDieuHanh,
      tenSP,
      maSP,
      cameraTruoc,
      cameraSau,
      manHinh,
    } = this.props.data;
    return (
      <div className="d-flex justify-content-around mt-5">
        <div>
          <h3>{tenSP}</h3>
          <img src={hinhAnh} width={400} height={400} alt="" />
        </div>
        <div>
          <h3>Thông tin chi tiết</h3>
          <table className="table">
            <tbody>
              <tr>
                <th>Mã SP</th>
                <td>{maSP}</td>
              </tr>
              <tr>
                <th>Màn hình</th>
                <td>{manHinh}</td>
              </tr>
              <tr>
                <th>Hệ điều hành</th>
                <td>{heDieuHanh}</td>
              </tr>
              <tr>
                <th>Camera trước</th>
                <td>{cameraTruoc}</td>
              </tr>
              <tr>
                <th>Camera sau</th>
                <td>{cameraSau}</td>
              </tr>
              <tr>
                <th>ROM</th>
                <td>{rom}</td>
              </tr>
              <tr>
                <th>Ram</th>
                <td>{ram}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.Product.dataDetail,
  };
};
export default connect(mapStateToProps, null)(ProductDetail);
