import React from "react";
import { Container, Typography } from "@material-ui/core";

const Github = () => {
  return (
    <Container fixed>
      <a
        style={{
          textDecoration: "none",
          color: "black",
          margin: 30,
          textAlign: "center",
        }}
        href="https://github.com/hellonewday/cnpm"
      >
        <Typography variant="h5">
          <b>Visit this website Github Repository here</b>
        </Typography>
      </a>
      <br />
      <Typography variant="h6">
        Bạn sẽ thấy trang web được làm theo mô hình MVC, model được làm bằng
        Mongo, View làm bằng React JS, Controller được làm bằng Express JS và
        chạy trên NodeJS
      </Typography>
      <br />
      <br />

      <Typography variant="h6">
        <b>Cách để tận dụng tốt nhất ?</b>
        <ol>
          <li>
            Fork Repo về, giờ bạn có thể thoải mái xài mà không ảnh hưởng thứ
            đang chạy
          </li>
          <li>Chạy theo đúng hướng dẫn mình đã note tại README.md</li>
          <li>
            Nếu bạn có kiến thức và mong muốn đóng góp cho mã nguồn này, bạn có
            thể đọc mục <b>Cho ai đó muốn tiếp tục</b>.
          </li>
          <li>
            Sau khi code xong, push lên repo đã fork của bạn, tạo 1 pull request
            đến file master của Repo chính này. Mình sẽ review rồi merge. Những
            pull request hay ho sẽ được mình tri ân trong mục Github này.
          </li>
        </ol>
      </Typography>
    </Container>
  );
};

export default Github;
