import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import Axios from "axios";
import Datalist from "./Datalist";
class Chapter extends Component {
  state = {
    data: [],
    chapter: null,
  };
  componentDidMount() {
    this.setState({ chapter: this.props.match.params.chap });
    Axios.get(
      `https://cnpm-e17cn1.herokuapp.com/pieces?chapter=${this.props.match.params.chap}`
    )
      .then((response) => {
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => console.log(error.response));
  }
  render() {
    const { chapter, data } = this.state;
    return (
      <Container fixed style={{ marginTop: 20 }}>
        <Typography variant="h4" style={{ margin: 10 }}>
          Chương {chapter}
        </Typography>
        <Datalist data={data} />
      </Container>
    );
  }
}

export default Chapter;
