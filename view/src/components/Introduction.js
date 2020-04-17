import React, { useState } from "react";
import { Typography, TextField } from "@material-ui/core";
import Axios from "axios";
import Datalist from "./Datalist";

const Introduction = () => {
  const [data, setData] = useState([]);
  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      setData([]);
    } else {
      Axios.get(`https://cnpm-e17cn1.herokuapp.com/pieces?text=${event.target.value}`)
        .then((response) => setData(response.data.data))
        .catch((error) => console.log(error.response));
    }
  };

  return (
    <div>
      <Typography variant="h6" style={{ margin: 10 }}>
        Chào mừng các bạn đến tới trung tâm học tập môn{" "}
        <b>Nhập môn Công nghệ phần mềm</b> - Khoa Công nghệ thông tin
        <div style={{ margin: 10 }}>
          <TextField
            id="standard-basic"
            label="Tìm kiếm nhanh"
            variant="outlined"
            type="text"
            name="text"
            onChange={handleChange}
            margin="dense"
            fullWidth
          />
        </div>
      </Typography>
      {data.length > 0 ? <Datalist data={data} /> : <hr />}
      <Typography variant="h5" style={{ margin: 10 }}>
        <b>Có gì hay ho ở đây?</b>
      </Typography>
      <Typography variant="h6" style={{ margin: 10 }}>
        Việc học tập thật khó khăn, mình phải đi làm cả ngày, dịch bệnh này công
        việc ngày một nhiều hơn. Vào một ngày đẹp trời, thầy dạy môn{" "}
        <b>Nhập môn Công nghệ phần mềm</b>, một phó giáo sư kiêm trưởng khoa
        Software Engineering có giao cho lớp tôi mỗi tuần đọc 1 chương trong
        giáo trình dài xấp xỉ 30 trang, đã vậy còn cho chúng mình dùng phương
        pháp <i>"đọc 4 lần"</i>. Mặc dù đọc rất cuốn hút, cũng thấy nhiều thứ
        hay ho áp dụng trong công ty mình làm việc, nhưng mình không thể sắp xếp
        thời gian để đọc hết được.
        <br />
        Hơn nữa sau khi đọc xong mớ chữ dài dằng dặc đó thầy còn hỏi chúng tôi
        về refactoring là gì, deadline là gì, workflow là gì, mô hình
        Agile,...nên mình có sáng kiến tại sao không cùng nhau note ra một tờ
        giấy những gì đọng lại trong quyển giáo trình nhỉ? Những ai chăm học có
        thể nhìn vào đó để học, hoặc những ai lười học có thể nhìn vào đó, gõ
        cái ra luôn một tràng các meaning để trả lời vấn đáp hàng tuần. Tuy
        nhiên việc note ra khá vất vả thì khá khó tìm nên mình đi tới kết luận
        làm ra trang web này.
      </Typography>
      <br />
      <br />
      <Typography variant="h5" style={{ margin: 10 }}>
        <b>Mình là ai?</b>
      </Typography>
      <Typography variant="h6" style={{ margin: 10 }}>
        Mình hiện đang là nhân viên IT của AFFVNA Group - Eagle Team, sinh viên
        của khoa Công nghệ thông tin hệ Chất lượng cao. Công việc hàng ngày của
        mình là viết phần mềm, tool, chạy và cài đặt hệ thống cho các đầu quảng
        cáo online và về nhà cày LMHT tới khi nào mẹ mắng đi ngủ thì thôi.
        <br />
        Mình đam mê lập trình Web, đặc biệt NodeJS, Express, Facebook Stack
        (GraphQL, Redux, React, React Native,...) và MongoDB.
      </Typography>
      <br />
      <br />
      <Typography variant="h5" style={{ margin: 10 }}>
        <b>Tài liệu học</b>
      </Typography>
      <Typography variant="h6" style={{ margin: 10 }}>
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://drive.google.com/file/d/0B6kidcV4CiTFLTI4UmozWlpBS3M/view?usp=sharing"
        >
          1. Giáo trình
        </a>
        <br />
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://drive.google.com/file/d/1kwzhnBTQX_q6DGWf9dN5HQgYhNYKv6s1/view?usp=sharing"
        >
          2. Ngân hàng câu hỏi
        </a>
        <br />
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://drive.google.com/file/d/1sY72yu2tdB7up4L9dtzLvItwoFGJ6z91/view?usp=sharing"
        >
          3. Đề Bài tập lớn
        </a>
      </Typography>
    </div>
  );
};

export default Introduction;
