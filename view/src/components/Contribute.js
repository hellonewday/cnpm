import React, { Component } from "react";
import { TextField, Button, Container } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import ForwardIcon from "@material-ui/icons/Forward";
import axios from "axios";
import { Link } from "react-router-dom";

const styles = {
  textField: {
    margin: 10,
  },
  textArea: {
    margin: 10,
  },
};

class Contribute extends Component {
  state = {
    text: "",
    meaning: "",
    first_appear: "",
    status: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      text: this.state.text,
      meaning: this.state.meaning,
      first_appear: this.state.first_appear,
    };
    axios
      .post("/pieces", data)
      .then((response) => {
        this.setState({ status: response.status });
      })
      .catch((error) => {
        console.log(error.response);
        alert("Có lỗi rồi");
      });
  };

  render() {
    const { status, text } = this.state;
    return (
      <Container fixed>
        <TextField
          id="standard-basic"
          label="Từ chuyên ngành"
          variant="outlined"
          name="text"
          style={styles.textField}
          onChange={this.handleChange}
          fullWidth
        />
        <br />
        <TextField
          id="standard-basic"
          label="Nó có nghĩa là..."
          name="meaning"
          variant="outlined"
          style={styles.textArea}
          onChange={this.handleChange}
          fullWidth
        />
        <br />
        <TextField
          id="standard-basic"
          label="Thuộc chương..."
          name="first_appear"
          variant="outlined"
          type="number"
          style={styles.textField}
          onChange={this.handleChange}
        />
        <br />
        <Button
          variant="contained"
          onClick={this.handleSubmit}
          color="primary"
          style={styles.textField}
        >
          Đăng tải <ForwardIcon style={{ marginLeft: 10, fontSize: 30 }} />
        </Button>
        <br />
        {status === 201 ? (
          <Alert severity="success">
            <AlertTitle>Đăng tải thành công</AlertTitle>
            Tri thức của bạn đã được chia sẻ tới cộng đồng —{" "}
            <Link
              to={`/text/${text}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <strong>Đi xem nào!</strong>{" "}
            </Link>
          </Alert>
        ) : status === 200 ? (
          <Alert severity="info">
            <AlertTitle>Đã được cập nhật</AlertTitle>
            Bản dịch của bạn đã được cập nhật vào khay bản dịch của từ chuyên
            ngành trên —{" "}
            <Link
              to={`/text/${text}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <strong>Kiểm tra nào!</strong>
            </Link>
          </Alert>
        ) : status === 500 ? (
          <Alert severity="error">
            <AlertTitle>500 - Server gặp lỗi</AlertTitle>
            Có lỗi trong quá trình đăng tải
          </Alert>
        ) : (
          ""
        )}
      </Container>
    );
  }
}

export default Contribute;
