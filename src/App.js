import React, { Component } from "react";
import { Button, SVGIcon } from "react-md";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barang: "",
      jumlah: "",
      harga: "",
      data: [],
      iniEdit: false,
      editNo: null
    };
    this.updateState = this.updateState.bind(this);
  }
  handleEdit(produk, nomor) {
    var data = this.state.data;
    this.setState({
      barang: produk.barang,
      jumlah: produk.jumlah,
      harga: produk.harga,
      iniEdit: true,
      editNo: nomor
    });
  }
  handleDelete(nomor) {
    var data = this.state.data;
    data.splice(nomor);
    this.setState({
      data: data
    });
  }
  updateState(e) {
    var editbukan = this.state.iniEdit;
    if (editbukan) {
      var data = this.state.data;
      var barang = this.state.barang;
      var jumlah = this.state.jumlah;
      var harga = this.state.harga;

      var produk = data[this.state.editNo];
      produk.barang = barang;
      produk.jumlah = jumlah;
      produk.harga = harga;
      this.setState({
        data: data
      });
    } else {
      var data = this.state.data;
      var barang = this.state.barang;
      var jumlah = this.state.jumlah;
      var harga = this.state.harga;

      var produk = {};
      produk.barang = barang;
      produk.jumlah = jumlah;
      produk.harga = harga;
      data.push(produk);

      this.setState({
        barang: e.target.value,
        jumlah: e.target.value,
        harga: e.target.value
      });
      console.log(data);
    }
  }

  render() {
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-md@1.12.3/dist/react-md.indigo-pink.min.css"
          />
        </head>
        <body>
          <script src="https://unpkg.com/react/dist/react.min.js"></script>
          <script src="https://unpkg.com/react-dom/dist/react-dom.min.js"></script>
          <script src="https://unpkg.com/react-addons-css-transition-group/dist/react-addons-css-transition-group.min.js"></script>
          <script src="https://unpkg.com/react-addons-transition-group/dist/react-addons-transition-group.min.js"></script>
          <script src="https://unpkg.com/react-md@1.12.3/dist/react-md.min.js"></script>
          <script src="/bundle.js"></script>
        </body>
        <div>
          <center>
            <h1>List Belanjaan</h1>
            <form>
              <input
                type="text"
                placeholder="barang"
                value={this.state.barang}
                onChange={e => {
                  var value = e.target.value;
                  this.setState({
                    barang: value
                  });
                }}
              />
              <h4></h4>
              <input
                type="number"
                placeholder="jumlah"
                value={this.state.jumlah}
                onChange={e => {
                  var value = e.target.value;
                  this.setState({
                    jumlah: value
                  });
                }}
              />
              <h4></h4>
              <input
                type="text"
                placeholder="harga/pcs"
                value={this.state.harga}
                onChange={e => {
                  var value = e.target.value;
                  this.setState({
                    harga: value
                  });
                }}
              />
            </form>
            <h4></h4>
            <Button
              onClick={this.updateState.bind(this)}
              flat
              primary
              swapTheming
            >
              Tambah
            </Button>
            <table id="list" class="t1">
              <tr>
                <th>
                  <center>barang</center>
                </th>
                <th>
                  <center>jumlah</center>
                </th>
                <th>
                  <center>harga</center>
                </th>
                <th>
                  <center>Edit</center>
                </th>
                <th>
                  <center>Delete</center>
                </th>
              </tr>
              {this.state.data.map((produk, nomor) => {
                return (
                  <tr>
                    <td>
                      <center>{produk.barang}</center>
                    </td>
                    <td>
                      <center>{produk.jumlah}</center>
                    </td>
                    <td>
                      <center>{produk.harga}</center>
                    </td>
                    <td>
                      <Button
                        class="b3"
                        onClick={this.handleEdit.bind(this, produk, nomor)}
                        flat
                      >
                        EDIT
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={this.handleDelete.bind(this, nomor)}
                        flat
                        secondary
                        swapTheming
                      >
                        DELETE
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </table>
            <h1></h1>
            <table class="t1">
              <tr>
                <th>JUMLLAH BARANG</th>
                <th>HARGA TOTAL</th>
              </tr>
              {this.state.data.map((produk, nomor) => {
                return (
                  <tr>
                    <td>
                      <center>...</center>
                    </td>
                    <td>
                      <center>{produk.harga}</center>
                    </td>
                  </tr>
                );
              })}
            </table>
          </center>
        </div>
      </html>
    );
  }
}

export default App;
