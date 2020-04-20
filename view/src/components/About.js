import React, { Component } from "react";
import {Typography, Container} from "@material-ui/core"

class About extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h5" style={{ margin: 10 }}>
          <b>Có gì hay ho ở đây?</b>
        </Typography>
        <Typography variant="h6" style={{ margin: 10 }}>
          Việc học tập thật khó khăn, mình phải đi làm cả ngày, dịch bệnh này
          công việc ngày một nhiều hơn. Vào một ngày đẹp trời, thầy dạy môn{" "}
          <b>Nhập môn Công nghệ phần mềm</b>, một phó giáo sư kiêm trưởng khoa
          Software Engineering có giao cho lớp tôi mỗi tuần đọc 1 chương trong
          giáo trình dài xấp xỉ 30 trang, đã vậy còn cho chúng mình dùng phương
          pháp <i>"đọc 4 lần"</i>. Mặc dù đọc rất cuốn hút, cũng thấy nhiều thứ
          hay ho áp dụng trong công ty mình làm việc, nhưng mình không thể sắp
          xếp thời gian để đọc hết được.
          <br />
          Hơn nữa sau khi đọc xong mớ chữ dài dằng dặc đó thầy còn hỏi chúng tôi
          về refactoring là gì, deadline là gì, workflow là gì, mô hình
          Agile,...nên mình có sáng kiến tại sao không cùng nhau note ra một tờ
          giấy những gì đọng lại trong quyển giáo trình nhỉ? Những ai chăm học
          có thể nhìn vào đó để học, hoặc những ai lười học có thể nhìn vào đó,
          gõ cái ra luôn một tràng các meaning để trả lời vấn đáp hàng tuần. Tuy
          nhiên việc note ra khá vất vả thì khá khó tìm nên mình đi tới kết luận
          làm ra trang web này.
        </Typography>
        <br />
        <br />
        <Typography variant="h5" style={{ margin: 10 }}>
          <b>Mình là ai?</b>
        </Typography>
        <Typography variant="h6" style={{ margin: 10 }}>
          Mình là Maximuss, sinh viên năm 3 khoa Công nghệ thông tin Chất lượng
          cao, hiện tại đang đi làm IT full-time ở 1 công ty tại Hà Nội.
          <br />
          Mình đam mê lập trình Web, đặc biệt NodeJS, Express, Facebook Stack
          (GraphQL, Redux, React, React Native,...) và MongoDB.
        </Typography>
        <br />
        <br />
      </Container>
    );
  }
}

export default About;
