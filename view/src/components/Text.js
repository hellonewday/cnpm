import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Axios from "axios";
class Text extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    Axios.get(`/pieces?text=${this.props.match.params.text}`)
      .then((response) => this.setState({ data: response.data.data }))
      .catch((error) => console.log(error.response));
  }
  render() {
    const { data } = this.state;
    console.log(this.state.data);
    return (
      <Container fixed>
        {data.length > 0
          ? data.map((item) => {
              return (
                <div key={item.id}>
                  <h1>{item.text}</h1>
                  <h3>Lần đầu xuất hiện: Chương {item.chapter}</h3>
                  <div>
                    <b>Các bản dịch nghĩa:</b> <br />
                    <ol>
                      {item.meaning.map((meaning) => {
                        return (
                          <li key={meaning} style={{ margin: 10 }}>
                            {meaning}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                  <p>
                    <b>Cập nhật lần cuối:</b> {item.updated_at}
                  </p>
                </div>
              );
            })
          : "No data found"}
      </Container>
    );
  }
}

export default Text;
