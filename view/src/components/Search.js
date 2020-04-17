import React, { Component } from "react";
import { TextField, Button, Container } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Axios from "axios";
import Datalist from "./Datalist";
const styles = {
  textField: {
    margin: 10,
  },
  textArea: {
    margin: 10,
  },
  button: {
    marginTop: 14,
    backgroundColor: "teal",
    textTransform: "normal",
    color: "white",
    fontSize: 12,
  },
};
class Search extends Component {
  state = {
    text: "",
    chapter: "",
    data: [],
  };

  componentDidMount() {
    Axios.get("/pieces")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error.response));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //     console.log(this.state);
    if (this.state.text && this.state.chapter) {
      Axios.get(`/pieces?text=${this.state.text}&chapter=${this.state.chapter}`)
        .then((response) => {
          this.setState({ data: response.data.data });
          console.log(this.state.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else if (this.state.text && !this.state.chapter) {
      Axios.get(`/pieces?text=${this.state.text}`)
        .then((response) => {
          this.setState({ data: response.data.data });
          console.log(this.state.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
      //  console.log("Find all text with ...");
    } else if (!this.state.text && this.state.chapter) {
      Axios.get(`/pieces?chapter=${this.state.chapter}`)
        .then((response) => {
          this.setState({ data: response.data.data });
          console.log(this.state.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
      //  console.log("Find all text on chapter");
    } else {
      alert("Vui lòng nhập thông tin");
    }
  };

  render() {
    const { data } = this.state;
    return (
      <Container>
        <br />
        <TextField
          id="standard-basic"
          label="Bạn tìm kiếm từ gì?"
          variant="outlined"
          type="text"
          name="text"
          style={styles.textField}
          onChange={this.handleChange}
          margin="dense"
        />{" "}
        hay{" "}
        <TextField
          id="standard-basic"
          label="Tìm kiếm chương nào?"
          variant="outlined"
          type="number"
          name="chapter"
          margin="dense"
          onChange={this.handleChange}
          style={styles.textField}
        />
        <Button
          variant="contained"
          style={styles.button}
          onClick={this.handleSubmit}
        >
          <SearchIcon style={{ fontSize: 20 }} /> Tìm
        </Button>
        <br />
        <br />
        {data.length > 0 ? <Datalist data={data} /> : <h5>Chưa có dữ liệu</h5>}
      </Container>
    );
  }
}

export default Search;
