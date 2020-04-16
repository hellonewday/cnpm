import React, { Component } from "react";
import { TextField, Button, Container } from "@material-ui/core";
import ForwardIcon from "@material-ui/icons/Forward";
import axios from "axios";

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
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("/pieces", this.state)
      .then((response) => {
        if (response.status === 201) {
          alert("Thêm thành công!");
          window.location.replace("/search");
        } else if (response.status === 200) {
          alert(
            "Từ chuyên ngành của bạn đã có người dịch, bản dịch của bạn sẽ được thêm vào danh sách nghĩa của từ chuyên ngành này"
          );
          window.location.replace("/search");
        }
      })
      .catch((error) => {
        console.log(error.response);
        alert("Có lỗi rồi");
      });
  };

  render() {
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
      </Container>
    );
  }
}

export default Contribute;
